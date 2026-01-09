import { Link, Outlet } from "react-router-dom";
import logo from "../assets/CARMAINT.png";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="page dashboard-page">
      <div className="dashboard-sidebar">
        <Link to="/dashboard" className="link">
          <div className="dashboard-logo">
            <img src={logo} />
            <h1>CARMAINT</h1>
          </div>
        </Link>
        <ul>
          <Link to="/services" className="link">
            Services
          </Link>
          <Link to="/reminder" className="link">
            Reminder
          </Link>
          <Link to="/fund" className="link">
            Fund
          </Link>
          <Link to="/wishlist" className="link">
            Wishlist
          </Link>
        </ul>
      </div>
      <div className="dashboard-navbar-top">
        <h1>DASHBOARD</h1>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
