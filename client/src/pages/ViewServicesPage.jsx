import React from "react";
import { useLocation } from "react-router-dom";

const ViewServicesPage = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <div className="view-service-page">
        <div className="data-services">
          <ul>
            <li>services: {state.service}</li>
            <li>date: {state.date}</li>
            <li>cost: {state.cost}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ViewServicesPage;
