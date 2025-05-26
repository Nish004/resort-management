import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import Home from "./pages/Home.jsx";
import BookRoom from "./pages/BookRoom.jsx";
import Payment from "./pages/Payment.jsx";
import Profile from "./pages/Profile.jsx";
import BookingHistory from "./pages/BookingHistory.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import ManageRooms from "./pages/admin/ManageRooms.jsx";
import ViewBookings from "./pages/admin/ViewBookings.jsx";
import ManageUsers from "./pages/admin/ManageUsers.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Container className="main-content py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book" element={<BookRoom />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<BookingHistory />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/rooms" element={<ManageRooms />} />
            <Route path="/admin/bookings" element={<ViewBookings />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;