import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import Home from "./pages/Home.jsx";
import BookRoom from "./pages/BookRoom.jsx";
import Payment from "./pages/Payment.jsx";
import Profile from "./pages/Profile.jsx";
import BookingHistory from "./pages/BookingHistory.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import ManageRooms from "./pages/admin/ManageRooms.jsx";
import ViewBookings from "./pages/admin/ViewBookings.jsx";
import ManageUsers from "./pages/admin/ManageUsers.jsx";
import NotFound from "./pages/NotFound.jsx"; // optional 404 page

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<BookRoom />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<BookingHistory />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/rooms" element={<ManageRooms />} />
        <Route path="/admin/bookings" element={<ViewBookings />} />
        <Route path="/admin/users" element={<ManageUsers />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
