import axios from "axios";

const baseURL = "http://localhost:3000"; // Remplacez par l'URL de base de votre serveur backend

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseURL}/admin/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(
      `${baseURL}/admin/users/${id}`,
      updatedUser
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/admin/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
