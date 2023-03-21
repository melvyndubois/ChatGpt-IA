// components/AdminPage.js
import React, { useState, useEffect } from "react";
import { getUsers, deleteUser, updateUser } from "../api/api"; // Vous devez créer ces fonctions pour appeler vos API

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    }
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    await deleteUser(userId);
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleUpdate = async (userId, updatedUser) => {
    await updateUser(userId, updatedUser);
    setUsers(users.map((user) => (user._id === userId ? updatedUser : user)));
  };

  return (
    <div>
      <h1>Page d'administration</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nom d'utilisateur</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                {/* Ici, vous pouvez utiliser un composant de formulaire pour la mise à jour des informations */}
                <button
                  onClick={() =>
                    handleUpdate(user._id, {
                      /* Données du formulaire ici */
                    })
                  }
                >
                  Modifier
                </button>
                <button onClick={() => handleDelete(user._id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
