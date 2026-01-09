import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userAuth, setUserAuth] = useState(false);
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5484/auth/dashboard", {
          withCredentials: true,
        });
        if (res.data.status) {
          setUserAuth(true);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(true);
      }
    };
    verifyAuth();
  }, []);

  if (loading) return <div>Loading... </div>;
  return userAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
