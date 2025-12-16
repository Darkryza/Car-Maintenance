import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <form className="register-container">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Create username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Create password" />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm your password"
        />
        <button>Submit</button>
        <Link to="/">Create account</Link>
      </form>
    </div>
  );
};

export default RegisterPage;
