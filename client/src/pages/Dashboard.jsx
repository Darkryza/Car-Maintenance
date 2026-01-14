import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/CARMAINT.png";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5484/auth/logout",
        {},
        { withCredentials: true }
      );
      if (res.data.status) {
        alert(res.data.message);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "DASHBOARD";
      case "/services":
        return "SERVICES";
      case "/addService":
        return "SERVICES";
      case "/reminder":
        return "REMINDER";
      case "/fund":
        return "FUND";
      case "/wishlist":
        return "WISHLIST";
      default:
        return "DASHBOARD";
    }
  };
  return (
    <div className="page dashboard-page">
      <div className="dashboard-sidebar">
        <Link to="/" className="link">
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
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
      <div className="dashboard-navbar-top">
        <h1>{getTitle()}</h1>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
