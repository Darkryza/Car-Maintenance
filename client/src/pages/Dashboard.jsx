import { useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import logo from "../assets/CARMAINT.png";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/");
        }
        await axios.get("http://localhost:5484/auth/dashboard", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);
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
          <Link to="/dashboard/services" className="link">
            Services
          </Link>
          <Link to="/dashboard/reminder" className="link">
            Reminder
          </Link>
          <Link to="/dashboard/fund" className="link">
            Fund
          </Link>
          <Link to="/dashboard/wishlist" className="link">
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
