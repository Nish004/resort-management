import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start border-top mt-5 pt-4 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <h6 className="text-uppercase">Belle Vue Resort</h6>
            <p>Luxury beside the lake. Serene stays await you.</p>
          </div>
          <div className="col-lg-2 mb-3">
            <h6 className="text-uppercase">Explore</h6>
            <ul className="list-unstyled">
              <li><Link to="/gallery" className="text-dark text-decoration-none">Gallery</Link></li>
              <li><Link to="/offers" className="text-dark text-decoration-none">Offers</Link></li>
              <li><Link to="/dining" className="text-dark text-decoration-none">Dining</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 mb-3">
            <h6 className="text-uppercase">Company</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-dark text-decoration-none">About</Link></li>
              <li><Link to="/careers" className="text-dark text-decoration-none">Careers</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 mb-3">
            <h6 className="text-uppercase">Stay Connected</h6>
            <p>Subscribe to our newsletter</p>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
        </div>
        <hr />
        <div className="text-center py-2 small text-muted">
          © 2025 Belle Vue Resort. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
