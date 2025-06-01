import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaUtensils, FaCamera, FaMapMarkerAlt, FaClipboardList, FaEnvelope, FaCalendar  } from "react-icons/fa";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sidebar d-flex flex-column bg-light text-dark p-3 shadow vh-100" // Ensures full height
      style={{ width: isHovered ? "200px" : "60px", transition: "width 0.2s" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Use absolute paths inside /Dashboard */}
      <Link to="/Dashboard" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaHome size={14} />
        {isHovered && <span className="ms-3">Dashboard</span>}
      </Link>


      <Link to="/Dashboard/profile" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaUser size={14} />
        {isHovered && <span className="ms-3">Profile</span>}
      </Link>

      <Link to="/Dashboard/events" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaCalendar size={14} />
        {isHovered && <span className="ms-3">Events</span>}
      </Link>

      <Link to="/Dashboard/event-requests" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaClipboardList size={14} />
        {isHovered && <span className="ms-3">Requests</span>}
      </Link>

      <Link to="/Dashboard/messages" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaEnvelope size={14} />
        {isHovered && <span className="ms-3">Messages</span>}
      </Link>

      <Link to="/Dashboard/caterers" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaUtensils size={14} />
        {isHovered && <span className="ms-3">Caterers</span>}
      </Link>

      <Link to="/Dashboard/photographers" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaCamera size={14} />
        {isHovered && <span className="ms-3">Photographers</span>}
      </Link>

      <Link to="/Dashboard/venues" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaMapMarkerAlt size={14} />
        {isHovered && <span className="ms-3">Venues</span>}
      </Link>



      <Link to="/Dashboard/settings" className="nav-link text-dark d-flex align-items-center p-2 hover-effect">
        <FaCog size={14} />
        {isHovered && <span className="ms-3">Settings</span>}
      </Link>

      <Link to="/Dashboard/logout" className="nav-link text-danger d-flex align-items-center p-2 hover-effect">
        <FaSignOutAlt size={14} />
        {isHovered && <span className="ms-3">Logout</span>}
      </Link>
    </div>
  );
};

export default Sidebar;
