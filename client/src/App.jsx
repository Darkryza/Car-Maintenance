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

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<HomePage />} />
        <Route path="/dashboard/services" element={<ServicesPage />} />
        <Route path="/dashboard/reminder" element={<ReminderPage />} />
        <Route path="/dashboard/fund" element={<FundPage />} />
        <Route path="/dashboard/wishlist" element={<WishlistPage />} />
      </Route>
    </Routes>
  );
}

export default App;
