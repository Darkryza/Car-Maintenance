import { Link } from "react-router-dom";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <div className="page service-page">
      <div className="top">
        <Link className="add-service">Add services</Link>
      </div>
      <div className="table"></div>
    </div>
  );
};

export default ServicesPage;
