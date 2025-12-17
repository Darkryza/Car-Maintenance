import { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <div className="register-page">
      <form className="register-container">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Create username"
          name="username"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create password"
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          onChange={handleChange}
        />
        <button>Submit</button>
        <Link to="/">Back to login</Link>
      </form>
    </div>
  );
};

export default RegisterPage;
