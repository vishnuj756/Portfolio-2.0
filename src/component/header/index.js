import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assests/images/logo_new.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Your actual data structure
  const color = {
    primary: "#00D4AA",
    white: "#ffffff",
    dark: "#070D1B",
  };

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about-us" },
    { name: "Resume", path: "/resume" },
    { name: "Service", path: "/service" },
    { name: "CONTACT", path: "/contact-us" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        .modern-navbar {
          background: ${scrolled
            ? "rgba(7, 13, 27, 0.95)"
            : "rgba(7, 13, 27, 0.85)"};
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 212, 170, 0.1);
          transition: all 0.4s ease;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: ${scrolled ? "0.3rem 0" : "0rem 0"};
          box-shadow: ${scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.2)"
            : "0 4px 16px rgba(0, 0, 0, 0.1)"};
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .brand-logo {
          display: flex;
          align-items: center;

          text-decoration: none;
          transition: all 0.3s ease;
        }

        .brand-logo:hover {
          transform: translateY(-2px);
        }

        .logo-img {
          width: ${scrolled ? "80px" : "100px"};
        }

        .brand-text {
          display: flex;
        }

        .brand-v {
          font-size: ${scrolled ? "1.4rem" : "1.6rem"};
          font-weight: 500;
          color: ${color.primary};
          transition: all 0.4s ease;
          margin-right: 2px;
        }

        .brand-name {
          font-size: ${scrolled ? "1.8rem" : "2rem"};
          font-weight: 800;
          color: ${color.white};
          transition: all 0.4s ease;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 0.85rem;
        }

        .nav-link::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: ${color.primary};
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover,
        .nav-link.active {
          color: ${color.primary};
          background: rgba(0, 212, 170, 0.1);
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          width: 80%;
        }

        .contact-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.6rem 1.5rem;
          background: linear-gradient(
            135deg,
            ${color.primary}20,
            ${color.primary}10
          );
          border: 1px solid rgba(0, 212, 170, 0.3);
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .contact-info:hover {
          background: linear-gradient(
            135deg,
            ${color.primary}30,
            ${color.primary}20
          );
          border-color: ${color.primary};
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(0, 212, 170, 0.2);
        }

        .phone-icon {
          font-size: 1.1rem;
        }

        .phone-number {
          color: ${color.primary};
          font-size: 0.95rem;
          font-weight: 600;
          margin: 0;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: 2px solid rgba(0, 212, 170, 0.3);
          border-radius: 8px;
          padding: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-toggle:hover {
          border-color: ${color.primary};
          background: rgba(0, 212, 170, 0.1);
        }

        .hamburger {
          width: 24px;
          height: 20px;
          position: relative;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: ${color.primary};
          margin: 4px 0;
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 320px;
          height: 100vh;
          background: linear-gradient(135deg, #070d1b 0%, #1a1a2e 100%);
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 1001;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-header {
          padding: 2rem 1.5rem;
          border-bottom: 1px solid rgba(0, 212, 170, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mobile-title {
          color: ${color.white};
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
        }

        .close-btn {
          background: none;
          border: 2px solid ${color.primary};
          color: ${color.primary};
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .close-btn:hover {
          background: ${color.primary};
          color: #000;
        }

        .mobile-nav {
          padding: 2rem 1.5rem;
        }

        .mobile-nav-item {
          margin-bottom: 0.5rem;
        }

        .mobile-nav-link {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          display: block;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: ${color.primary};
          background: rgba(0, 212, 170, 0.1);
          border-color: rgba(0, 212, 170, 0.3);
          transform: translateX(10px);
        }

        .mobile-contact {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(0, 212, 170, 0.1);
          border: 1px solid rgba(0, 212, 170, 0.3);
          border-radius: 12px;
          text-align: center;
        }

        .mobile-contact-title {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .mobile-phone {
          color: ${color.primary};
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .nav-menu {
            display: none;
          }

          .contact-info {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 1rem;
          }

          .mobile-menu {
            width: 280px;
          }

          .brand-v,
          .brand-name {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu {
            width: 100%;
          }

          .navbar-container {
            padding: 0 0.5rem;
          }
        }
      `}</style>

      {/* Global body padding */}
      <style jsx global>{`
        body {
          padding-top: 85px;
        }
      `}</style>

      <motion.nav
        className="modern-navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="navbar-container">
          {/* Brand Logo */}
          <motion.a
            href="/"
            className="brand-logo"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logo} alt="Logo" className="logo-img" />
            <div className="brand-text flex-column">
              <span className="brand-v text-white ">Vishal Shivhare </span>
              <h6
                className="text-secondary text-start"
                style={{ fontSize: 14 }}
              >
                Front End Developer
              </h6>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {links.map((link, index) => (
              <motion.li
                key={link.name}
                className="nav-item"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <NavLink
                  to={link.path}
                  className={`nav-link ${
                    activeSection === link.path ? "active" : ""
                  }`}
                  onClick={() => {
                  setActiveSection(link.path)}}
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="phone-icon">📞</span>
            <p className="phone-number">+91 8871942880</p>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setShowOffcanvas(true)}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${showOffcanvas ? "open" : ""}`}
        onClick={() => setShowOffcanvas(false)}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {showOffcanvas && (
          <motion.div
            className={`mobile-menu ${showOffcanvas ? "open" : ""}`}
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Mobile Header */}
            <div className="mobile-header">
              <h3 className="mobile-title">Menu</h3>
              <button
                className="close-btn"
                onClick={() => setShowOffcanvas(false)}
              >
                ×
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="mobile-nav">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  className="mobile-nav-item"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {links.map((item) => {
                    return (
                      <>
                        <NavLink
                          to={item.path}
                          className="mx-2 text-decoration-none fs-6 p-1"
                          style={{ color: "white" }}
                        >
                          {item.name}
                        </NavLink>
                      </>
                    );
                  })}
                </motion.div>
              ))}

              {/* Mobile Contact */}
              <motion.div
                className="mobile-contact"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="mobile-contact-title">Get in touch</p>
                <p className="mobile-phone">+91 8871942880</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
