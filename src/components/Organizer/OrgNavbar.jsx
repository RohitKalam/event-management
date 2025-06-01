import React from "react";
import profileImg from "../Organizer/img/profile.png"
import { Link } from "react-router-dom";
const OrgNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Left Side: Event Management System */}
        <h1 className="h4">Event Management System</h1>

        {/* Right Corner: Profile Image & Dropdown */}
        <div className="dropdown ms-auto">
          <Link to="/Dashboard/profile"
            className="d-flex align-items-center text-decoration-none dropdown-toggle"
            id="profileDropdown" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <img 
              src={profileImg} 
              alt="Profile" 
              className="rounded-circle" 
              width="32" 
            />
          </Link>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
            <li><Link className="dropdown-item" to="/Dashboard/Profile">Profile</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item text-danger" to="/Dashboard/logout">Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default OrgNavbar;
