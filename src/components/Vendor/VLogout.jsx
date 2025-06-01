import React from "react";
import { useNavigate } from "react-router-dom";

import VendorNav from "./VendorNav";
import VendorSidebar from "./VendorSidebar";

function VLogout() {
  const navigate = useNavigate(); // React Router navigation

  function handleClick() {
    localStorage.clear();
    navigate("/"); // Redirect to Dashboard
  }
  return (
    <>
      <VendorNav /> {/* Always Visible */}
      <div className="d-flex ">
        <VendorSidebar /> {/* Always Visible */}
        <div className="w-100 pb-4">
          <h4>Confirm Logout</h4>
          <button onClick={handleClick} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default VLogout;
