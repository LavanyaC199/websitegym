import { useEffect, useState } from "react";
import api from "../services/api";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // Load users
  useEffect(() => {
    api.get("/admin/users").then(res => setUsers(res.data));
  }, []);

  // Delete user
  const deleteUser = async (id) => {
    await api.delete(`/admin/user/${id}`);
    setUsers(users.filter(u => u._id !== id));
  };

  // Update user
  const updateUser = async () => {
    const res = await api.put(`/admin/user/${editUser._id}`, {
      name: editUser.name,
      email: editUser.email,
      role: editUser.role,
    });

    setUsers(users.map(u => (u._id === res.data._id ? res.data : u)));
    setEditUser(null);
  };

  return (
    <div className="admin-card">
      <h3 className="sparkle-title">👤 User Management</h3>


      {/* USERS TABLE */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button onClick={() => setEditUser(u)}>✏️</button>
                <button onClick={() => deleteUser(u._id)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EDIT MODAL */}
      {editUser && (
        <div className="modal">
          <h4>Edit User</h4>

          <input
            placeholder="Name"
            value={editUser.name}
            onChange={e =>
              setEditUser({ ...editUser, name: e.target.value })
            }
          />

          <input
            placeholder="Email"
            value={editUser.email}
            onChange={e =>
              setEditUser({ ...editUser, email: e.target.value })
            }
          />

          <select
            value={editUser.role}
            onChange={e =>
              setEditUser({ ...editUser, role: e.target.value })
            }
          >
            <option value="user">User</option>
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
          </select>

          <div className="modal-actions">
            <button onClick={updateUser}>Update</button>
            <button onClick={() => setEditUser(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
