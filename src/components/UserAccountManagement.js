import React, { useState } from "react";

const UserAccountManagement = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "regular" }); // Default role is "regular"

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: Date.now() }]);
    setNewUser({ name: "", email: "", role: "regular" });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>User Account Management</h2>
      <input
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
      >
        <option value="regular">Regular User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleAddUser}>Add User</button>

      <h3>Registered Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email}) - Role: {user.role}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAccountManagement;
