import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ServicesPage from "./pages/ServicesPage";
import ReminderPage from "./pages/ReminderPage";
import FundPage from "./pages/FundPage";
import WishlistPage from "./pages/WishlistPage";
import "./App.css";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="reminder" element={<ReminderPage />} />
        <Route path="fund" element={<FundPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
      </Route>
    </Routes>
  );
}

export default App;
