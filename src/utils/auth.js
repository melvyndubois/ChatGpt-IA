import jwt_decode from "jwt-decode";

export const isLoggedIn = async () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  console.log(localStorage);

  if (!token || !user) {
    return false;
  }

  try {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error decoding token:", error);
    return false;
  }
};

export const getUserFromLocalStorage = () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwt_decode(token);
      return decodedToken.user;
    } catch (error) {
      console.error("Erreur lors de la décodage du token:", error);
      return null;
    }
  }

  return null;
};
