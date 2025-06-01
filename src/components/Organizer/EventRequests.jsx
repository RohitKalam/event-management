import React, { useState } from "react";
import OrgNavbar from "./OrgNavBar";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import EventRequestModal from "./EventRequestModal"; // Import Modal Component

function EventRequests() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const eventRequests = [
    {
      id: 1,
      username: "John Doe",
      eventType: "Wedding",
      dateTime: "2025-06-15 14:00",
      budget: "$5000",
    },
    {
      id: 2,
      username: "Jane Smith",
      eventType: "Birthday",
      dateTime: "2025-07-10 18:00",
      budget: "$2000",
    },
    {
      id: 3,
      username: "Alice Brown",
      eventType: "Corporate",
      dateTime: "2025-08-22 09:00",
      budget: "$8000",
    },
  ];

  const filteredRequests = eventRequests.filter(
    (request) =>
      request.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.eventType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.dateTime.includes(searchTerm)
  );

  // Function to Open Modal with Selected Request Details
  const openModal = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  return (
    <>
      <OrgNavbar />
      <div className="d-flex">
        <Sidebar />
        <div className="content w-100 p-3">

          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h4 className="h5">Event Requests</h4>
            <div className="d-flex mb-2 mb-md-0">
              <div className="btn-group w-100 me-2">
                {/* Search Bar */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search requests..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                
              </div>
            </div>
          </div>


          <table className="table table-hover table-bordered">
            <thead className="table-secondary  text-center">
              <tr>
                <th>Sr. No</th>
                <th>User Name</th>
                <th>Event Type</th>
                <th>Date & Time</th>
                <th>Budget</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredRequests.map((request, index) => (
                <tr key={request.id}>
                  <td>{index + 1}</td>
                  <td>{request.username}</td>
                  <td>{request.eventType}</td>
                  <td>{request.dateTime}</td>
                  <td>{request.budget}</td>
                  <td>
                    {/* Eye Button to Open Modal */}
                    <button
                      className="btn btn-info me-2"
                      onClick={() => openModal(request)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>

                    {/* Accept & Reject Buttons */}
                    <button className="btn btn-success me-2">
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button className="btn btn-danger">
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Component */}
      <EventRequestModal
        show={showModal}
        onHide={() => setShowModal(false)}
        request={selectedRequest}
      />
    </>
  );
}

export default EventRequests;
