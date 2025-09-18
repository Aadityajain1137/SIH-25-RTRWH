import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";  // Login icon
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Estimator", href: "#estimator" },
    { name: "Info", href: "#info" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Left side: Logo + Text */}
        <div className="logo">
          <img className="logo-img" src="/logo SIH black.png" alt="Logo" />
          <span className="logo-text">जल निधि</span>
        </div>

        {/* Right side: Nav links + Login Icon */}
        <div className="right-section">
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          {/* Login Icon */}
          <a href="#login" className="login-icon">
            <FaUserCircle />
          </a>

          {/* Mobile Menu Toggle */}
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
        </div>
      </div>
    </nav>
  );
}
