import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import "./footer.css";
import { Button } from "react-bootstrap";

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="belle-vue-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Column with Logo */}
          <div className="footer-brand">
            <div className="footer-logo">
              <FaHotel className="hotel-icon" />
              <span className="brand-name">BELLE VUE</span>
            </div>
            <p className="footer-tagline">
              Luxury beside the lake. Serene stays await you.
            </p>
            <div className="social-links">
              <Button><i className="fab fa-facebook-f"></i></Button>
              <Button><i className="fab fa-instagram"></i></Button>
              <Button><i className="fab fa-twitter"></i></Button>
              <Button><i className="fab fa-pinterest"></i></Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <div className="links-column">
              <h4 className="footer-title">Explore</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/book">Book Now</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/offers">Special Offers</Link></li>
              </ul>
            </div>
            <div className="links-column">
              <h4 className="footer-title">Information</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="footer-title">Newsletter</h4>
            <p>Subscribe for exclusive offers and updates</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2025 Belle Vue Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;