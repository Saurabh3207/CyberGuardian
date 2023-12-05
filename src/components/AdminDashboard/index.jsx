import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (role !== "admin") {
          // Redirect or handle unauthorized access
          console.log("Unauthorized access to admin dashboard");
          return;
        }

        // Fetch users data from your backend API
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [role]);

  const handleDeleteUser = async userId => {
    try {
      // Send a delete request to your backend API
      await axios.delete(`/api/users/${userId}`);

      // Update the users state after successful deletion
      setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleModifyUser = userId => {
    // Add your logic to navigate to a user modification page
    console.log(`Modify user with ID ${userId}`);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleModifyUser(user._id)}>
                  Modify
                </button>
                <button onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
