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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5484/login", login)
      .then((res) => {
        alert(res.data.message);
        if (res.status === 201) {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="LoginPage">
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
        <Link to="register">Create account</Link>
      </form>
    </div>
  );
}

export default LoginPage;
