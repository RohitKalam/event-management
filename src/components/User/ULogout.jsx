import React from "react";
import { useNavigate } from "react-router-dom";

import UserNav from "./UserNav";


function ULogout() {
  const navigate = useNavigate(); // React Router navigation

  function handleClick() {
    localStorage.clear();
    navigate("/"); // Redirect to Dashboard
  }
  return (
    <>
      <UserNav /> {/* Always Visible */}
      <div className="d-flex ">
       
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

export default ULogout;
