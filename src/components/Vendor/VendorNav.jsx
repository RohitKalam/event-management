import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../../assets/profile.png"; // Vendor profile image

const VendorNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Left Side: Vendor Portal */}
        <h1 className="h4">Vendor Portal</h1>

        {/* Right Corner: Profile Image & Dropdown */}
        <div className="dropdown ms-auto">
          <Link
            to="/VendorDashboard/profile"
            className="d-flex align-items-center text-decoration-none dropdown-toggle"
            id="profileDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={profileImg} alt="Profile" className="rounded-circle" width="32" />
          </Link>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
            <li><Link className="dropdown-item" to="/My-Dashboard/profile">Profile</Link></li>
            <li><Link className="dropdown-item" to="/My-Dashboard/logout">Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default VendorNav;
