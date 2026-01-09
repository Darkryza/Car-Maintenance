import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const [isGuest, setIsGuest] = useState(null);
  useEffect(() => {
    const validateGuest = async () => {
      try {
        const res = await axios.get("http://localhost:5484/auth/isAuth", {
          withCredentials: true,
        });
        if (res.data.status) {
          setIsGuest(false);
        } else {
          setIsGuest(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    validateGuest();
  }, []);
  if (isGuest === null) return <div>Loading....</div>;
  return isGuest ? children : <Navigate to="/" />;
};

export default GuestRoute;
