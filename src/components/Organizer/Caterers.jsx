import React, { useState } from "react";
import OrgNavbar from "./OrgNavBar";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

import UpdateCatererModal from "./UpdateCatererModal";
import AskToCollaborateModal from "./AskToCollaborateModal"; // ✅ Import collaboration modal
import AddVendorModal from "../AddVendorModal";

const Caterers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedCaterer, setSelectedCaterer] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [showCollaborateModal, setShowCollaborateModal] = useState(false);
  const [selectedCollaborator, setSelectedCollaborator] = useState(null);

  // Sample caterers data
  const caterers = [
    { id: 1, name: "Tasty Treats", cuisine: "Indian", experience: "15 Years", contact: "9876543210", sts: "available" },
    { id: 2, name: "Gourmet Delights", cuisine: "Continental", experience: "8 Years", contact: "8765432109", sts: "booked" },
    { id: 3, name: "Royal Feasts", cuisine: "Traditional", experience: "12 Years", contact: "7654321098", sts: "available" },
  ];

  const filteredCaterers = caterers.filter(
    (caterer) =>
      caterer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caterer.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply "Available Only" Filter
  const displayedCaterers = showAvailableOnly
    ? filteredCaterers.filter((caterer) => caterer.sts === "available")
    : filteredCaterers;

  return (
    <>
      <OrgNavbar />
      <div className="d-flex">
        <Sidebar />
        <div className="content w-100 p-3">
          <div className="d-flex justify-content-between align-items-center pb-2 mb-3 border-bottom">
            <h4 className="h5">Caterers</h4>
            <div className="d-flex gap-2">
              {/* Search Bar */}
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search caterers..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {/* Toggle Available Only */}
              <button
                className={`btn btn-${showAvailableOnly ? "secondary" : "info"} btn-sm`}
                onClick={() => setShowAvailableOnly(!showAvailableOnly)}
              >
                {showAvailableOnly ? "All" : "Available"}
              </button>
              {/* Add Caterer Button */}
              <button
                onClick={() => setShowModal(true)}
                className="btn btn-success btn-sm d-inline-flex align-items-center"
              >
                <i className="bi bi-plus me-2"></i> Add
              </button>
            </div>
          </div>

          {/* Caterers List Table */}
          <table className="table table-hover table-bordered">
            <thead className="table-secondary text-center">
              <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>Cuisine</th>
                <th>Experience</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {displayedCaterers.map((caterer, index) => (
                <tr key={caterer.id}>
                  <td>{index + 1}</td>
                  <td>{caterer.name}</td>
                  <td>{caterer.cuisine}</td>
                  <td>{caterer.experience}</td>
                  <td>{caterer.contact}</td>
                  <td>
                    <span className={`badge bg-${caterer.sts === "available" ? "success" : "danger"}`}>
                      {caterer.sts}
                    </span>
                  </td>
                  <td>
                    {/* Collaboration Button */}
                    {caterer.sts === "available" && (
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => {
                          setSelectedCollaborator(caterer);
                          setShowCollaborateModal(true);
                        }}
                      >
                        Ask to Collaborate
                      </button>
                    )}
                    {/* Update Button */}
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => {
                        setSelectedCaterer(caterer);
                        setShowUpdateModal(true);
                      }}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    {/* Delete Button */}
                    <button className="btn btn-danger btn-sm">
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
        <UpdateCatererModal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} caterer={selectedCaterer} />
        <AskToCollaborateModal show={showCollaborateModal} onHide={() => setShowCollaborateModal(false)} collaborator={selectedCollaborator} />
      </div>
    </>
  );
};

export default Caterers;
