import "../styles/adminDashboard.css";
import UserManagement from "./UserManagement";
import AdminChart from "./AdminChart";
import PaymentChart from "./PaymentChart";
export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div className="admin-content">
        <h1 className="sparkle-title">⚡ Admin Dashboard</h1>

        {/* ATTRACTIVE GRAPH */}
        <AdminChart />

        {/* USER MANAGEMENT */}
        <UserManagement />
        {/* PAYMENT GRAPH */}
        <PaymentChart />
      </div>
    

    </div>
  );
}
