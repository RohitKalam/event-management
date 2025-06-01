import React, { useState } from "react";
import VendorNav from "./VendorNav";
import VendorSidebar from "./VendorSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const VendorEventReq = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [budgetLimit, setBudgetLimit] = useState(5000); // Default budget limit

  const eventRequests = [
    { id: 1, organizer: "Elite Events", eventName: "Corporate Gala", dateTime: "2025-06-20 18:00", budget: 7000 },
    { id: 2, organizer: "Grand Weddings", eventName: "Wedding Reception", dateTime: "2025-07-05 15:00", budget: 4500 },
    { id: 3, organizer: "Premier Fest", eventName: "Music Festival", dateTime: "2025-08-12 20:00", budget: 12000 },
  ];

  const filteredRequests = eventRequests.filter(
    (request) =>
      request.budget >= budgetLimit &&
      (request.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.dateTime.includes(searchTerm))
  );

  return (
    <>
      <VendorNav />
      <div className="d-flex">
        <VendorSidebar />
        <div className="content w-100 p-3">
          <div className="d-flex justify-content-between pb-2 mb-3 border-bottom">
            <h4 className="h5">Event Requests</h4>
            <div className="d-flex gap-2 align-items-center">
              <input 
                type="text" 
                className="form-control w-75" 
                placeholder="Search requests..." 
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
              
              {/* Budget Range Filter */}
              <label className="fw-bold"> ${budgetLimit}</label>
              <input 
                type="range" 
                className="form-range w-25" 
                min="1000" 
                max="15000" 
                step="1000" 
                value={budgetLimit} 
                onChange={(e) => setBudgetLimit(Number(e.target.value))} 
              />
            </div>
          </div>

          {/* Bootstrap List Group */}
          <ul className="list-group">
            {filteredRequests.map((request) => (
              <li key={request.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{request.eventName}</h5>
                  <p className="mb-1 text-muted">{request.organizer} - {request.dateTime}</p>
                  <span className="badge bg-primary">${request.budget}</span>
                </div>
                <div>
                  <button className="btn btn-success me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button className="btn btn-danger">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default VendorEventReq;
