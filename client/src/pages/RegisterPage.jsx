import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import axios from "axios";

const RegisterPage = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (register.password === register.confirmPassword) {
      try {
        const res = await axios.post(
          "http://localhost:5484/register",
          register
        );
        if (res.status === 201) {
          alert(res.data.message);
          navigate("/");
        }
      } catch (err) {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("Server error");
        }
      }
    } else {
      alert("Your confirm password not same as your password");
    }
  };

  return (
    <div className="page register-page">
      <form className="register-container" onSubmit={handleSubmit}>
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
