import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null); // null = still loading

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5484/auth/isAuth", {
          withCredentials: true,
        });
        const { username } = res.data.user;
        setUserAuth(res.data.status);
        localStorage.setItem("username", username);
      } catch (err) {
        console.log(err);
        setUserAuth(false);
      }
    };
    verifyAuth();
  }, []);

  if (userAuth === null) return <div>Loading...</div>; // tunggu server response
  return userAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
