import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaUser, FaClipboardList, FaSignOutAlt, FaCog } from "react-icons/fa";

const VendorSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sidebar d-flex flex-column bg-light text-dark p-3 shadow vh-100"
      style={{ width: isHovered ? "200px" : "60px", transition: "width 0.2s" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/My-Dashboard" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaHome size={14} /> {isHovered && <span className="ms-3">Dashboard</span>}
      </Link>
      <Link to="/My-Dashboard/profile" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaUser size={14} /> {isHovered && <span className="ms-3">Profile</span>}
      </Link>
      <Link to="/My-Dashboard/orders" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaClipboardList size={14} /> {isHovered && <span className="ms-3">Tasks/Orders</span>}
      </Link>
      <Link to="/My-Dashboard/settings" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaCog size={14} /> {isHovered && <span className="ms-3">Settings</span>}
      </Link>
      <Link to="/My-Dashboard/logout" className="nav-link text-danger d-flex align-items-center p-2 hover-effect">
        <FaSignOutAlt size={14} /> {isHovered && <span className="ms-3">Logout</span>}
      </Link>
    </div>
  );
};

export default VendorSidebar;
