import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="login-container">
        <label htmlFor="username">Username</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
      </div>
    </div>
  );
}

export default LoginPage;
