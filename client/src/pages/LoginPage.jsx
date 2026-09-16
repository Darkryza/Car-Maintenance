import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";
import axios from "axios";

function LoginPage() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5484/auth/login", login, {
        withCredentials: true,
      });
      if (res.data.status) {
        alert(res.data.message);
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Server error");
      }
    }
  };
  return (
    <div className="page loginPage">
      <form className="login-container" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          className="login-input"
          onChange={handleChange}
          placeholder="Username"
          value={login.username}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="login-input"
          onChange={handleChange}
          placeholder="Password"
          value={login.password}
        />
        <button className="login-btn">Submit</button>
        <Link to="/register" className="register-link">
          Create account
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
