import React, { useState } from "react";
import OrgNavbar from "./OrgNavBar";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

import UpdatePhotographerModal from "./UpdatePhotographerModal";
import AskToCollaborateModal from "./AskToCollaborateModal"; // ✅ Import the modal
import AddVendorModal from "../AddVendorModal";

const Photographers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [showCollaborateModal, setShowCollaborateModal] = useState(false); // ✅ State for AskToCollaborate modal
  const [selectedCollaborator, setSelectedCollaborator] = useState(null); // ✅ Store selected collaborator

  // Sample photographers data
  const photographers = [
    { id: 1, name: "John Doe", specialty: "Wedding Photography", experience: "10 Years", contact: "9876543210", sts: "available" },
    { id: 2, name: "Jane Smith", specialty: "Corporate Events", experience: "5 Years", contact: "8765432109", sts: "booked" },
    { id: 3, name: "Alice Brown", specialty: "Portrait Photography", experience: "8 Years", contact: "7654321098", sts: "available" },
  ];

  const filteredPhotographers = photographers.filter((photographer) =>
    photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photographer.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply "Available Only" Filter
  const displayedPhotographers = showAvailableOnly
    ? filteredPhotographers.filter((photographer) => photographer.sts === "available")
    : filteredPhotographers;

  return (
    <>
      <OrgNavbar />
      <div className="d-flex">
        <Sidebar />
        <div className="content w-100 p-3">
          <div className="d-flex justify-content-between align-items-center pb-2 mb-3 border-bottom">
            <h4 className="h5">Photographers</h4>
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search photographers..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className={`btn btn-${showAvailableOnly ? "secondary" : "info"} btn-sm`}
                onClick={() => setShowAvailableOnly(!showAvailableOnly)}
              >
                {showAvailableOnly ? "All" : "Available"}
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="btn btn-success btn-sm d-inline-flex align-items-center"
              >
                <i className="bi bi-plus me-2"></i> Add
              </button>
            </div>
          </div>

          <table className="table table-hover table-bordered">
            <thead className="table-secondary text-center">
              <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Experience</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {displayedPhotographers.map((photographer, index) => (
                <tr key={photographer.id}>
                  <td>{index + 1}</td>
                  <td>{photographer.name}</td>
                  <td>{photographer.specialty}</td>
                  <td>{photographer.experience}</td>
                  <td>{photographer.contact}</td>
                  <td>
                    <span className={`badge bg-${photographer.sts === "available" ? "success" : "danger"}`}>
                      {photographer.sts}
                    </span>
                  </td>
                  <td>
                    {/* Collaboration Button */}
                    {photographer.sts === "available" && (
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => {
                          setSelectedCollaborator(photographer); // ✅ Store selected photographer
                          setShowCollaborateModal(true); // ✅ Open modal
                        }}
                      >
                        Ask to Collaborate
                      </button>
                    )}
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => {
                        setSelectedPhotographer(photographer);
                        setShowUpdateModal(true);
                      }}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => alert("Delete function pending")}>
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Components */}
                <AddVendorModal show={showModal} onHide={() => setShowModal(false)} />

        <UpdatePhotographerModal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} photographer={selectedPhotographer} />
        <AskToCollaborateModal show={showCollaborateModal} onHide={() => setShowCollaborateModal(false)} collaborator={selectedCollaborator} />
      </div>
    </>
  );
};

export default Photographers;
