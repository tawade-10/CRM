import React from "react";
import tecstaq_logo from "../Assets/tecstaq_logo.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_links">
        <div className="footer_links_div">
          <a className="navbar-brand" href="#!">
            <img src={tecstaq_logo} alt="Tecstaq Logo" height="30" />
          </a>
          <a href="/about-us" className="footer-link">
            <span>About Us</span>
          </a>
          <a href="/support" className="footer-link">
            <span>Support</span>
          </a>
          <a href="/contact-us" className="footer-link">
            <span>Contact Us</span>
          </a>
        </div>
        <div className="footer_links_div">
          <h4>Company</h4>
          <a
            href="https://tecstaq.com/about-tecstaq-services/"
            className="footer-link"
          >
            <span>About Us</span>
          </a>
          <a href="/support" className="footer-link">
            <span>Support</span>
          </a>
          <a href="https://tecstaq.com/contact/" className="footer-link">
            <span>Contact Us</span>
          </a>
          <a href="https://tecstaq.com/" className="footer-link">
            <span>Home</span>
          </a>
        </div>
        <div className="footer_links_div">
          <h4>Our Services</h4>
          <a href="https://tecstaq.com/aws/" className="footer-link">
            <span>Aws</span>
          </a>
          <a href="https://tecstaq.com/acronis/" className="footer-link">
            <span>Acronis</span>
          </a>
          <a
            href="https://tecstaq.com/microsoft-azure/"
            className="footer-link"
          >
            <span>Azure</span>
          </a>
          <a href="https://tecstaq.com/office-365/" className="footer-link">
            <span>Office 365</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
