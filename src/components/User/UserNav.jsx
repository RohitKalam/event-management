import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImg from "../../assets/profile.png"
const UserNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand fw-bold" to="/">Event Management System</Link>
      
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/index">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/index/Organizers">Organizers</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/index/Messages">Messages</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/index/Bookings">Bookings</Link>
          </li>
        </ul>
      </div>

      {/* Profile Dropdown */}
      <div className="dropdown">
        <img src={profileImg} alt="Profile" width="32" className="rounded-circle dropdown-toggle" id="profileDropdown" data-bs-toggle="dropdown" />
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
          <li><Link className="dropdown-item" to="/index/profile">Profile</Link></li>
          <li><Link className="dropdown-item" to="/index/settings">Change Password</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item text-danger" to="/index/logout">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNav;
