import React from "react";
import { useLocation } from "react-router-dom";

const ViewServicesPage = () => {
  const { state } = useLocation();
  console.log(state);
  return <></>;
};

export default ViewServicesPage;
