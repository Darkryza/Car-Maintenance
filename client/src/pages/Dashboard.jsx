import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="page dashboard-page">
      <div className="dashboard-sidebar">
        <div className="dashboard-logo">
          <img src="CARMAINT.png" />
          <h1>CARMAINT</h1>
        </div>
        <ul>
          <li>Services</li>
          <li>Reminder</li>
          <li>Fund</li>
          <li>Wishlist</li>
        </ul>
      </div>
      <div className="dashboard-navbar-top">
        <h1>DASHBOARD</h1>
      </div>
      <div className="content">{/* <Outlet /> */}</div>
    </div>
  );
};

export default Dashboard;
