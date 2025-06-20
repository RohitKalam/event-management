import React, { useState } from "react";
import OrgNavbar from "./OrgNavBar";
import Sidebar from "./Sidebar";
import AddVendorModal from "../AddVendorModal";
import AskToCollaborateModal from "./AskToCollaborateModal";
import UpdateVendorModal from "./UpdateVendorModal";
import "bootstrap/dist/css/bootstrap.min.css";

const Collaborators = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const [selectedVendor, setSelectedVendor] = useState(null);
  const [selectedCollaborator, setSelectedCollaborator] = useState(null);
  const [showCollaborateModal, setShowCollaborateModal] = useState(false);

  const collaborators = [
    { id: 1, name: "John Doe", category: "Photographer", contact: "9876543210", sts: "available" },
    { id: 2, name: "Amrita Events", category: "Decorator", contact: "9876504321", sts: "booked" },
    { id: 3, name: "Savor Caterers", category: "Caterer", contact: "9876509876", sts: "available" }
  ];

  const filtered = collaborators.filter((col) =>
    col.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    col.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayed = showAvailableOnly
    ? filtered.filter((col) => col.sts === "available")
    : filtered;

  return (
    <>
      <OrgNavbar />
      <div className="d-flex">
        <Sidebar />
        <div className="content w-100 p-3">
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
            <h4 className="h5">Collaborators</h4>
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name or category..."
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

          <table className="table table-hover table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayed.map((c, idx) => (
                <tr key={c.id}>
                  <td>{idx + 1}</td>
                  <td>{c.name}</td>
                  <td>{c.category}</td>
                  <td>{c.contact}</td>
                  <td>
                    <span className={`badge bg-${c.sts === "available" ? "success" : "danger"}`}>
                      {c.sts}
                    </span>
                  </td>
                  <td>
                    {c.sts === "available" && (
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => {
                          setSelectedCollaborator(c);
                          setShowCollaborateModal(true);
                        }}
                      >
                        Send Collaboration
                      </button>
                    )}
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        setSelectedVendor(c);
                        setShowUpdateModal(true);
                      }}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddVendorModal
        show={showModal}
        onHide={() => setShowModal(false)}
      />

      <UpdateVendorModal
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        vendor={selectedVendor}
        onSave={(updated) => {
          console.log("Updated vendor:", updated);
          setShowUpdateModal(false);
        }}
      />

      <AskToCollaborateModal
        show={showCollaborateModal}
        onHide={() => setShowCollaborateModal(false)}
        collaborator={selectedCollaborator}
      />
    </>
  );
};

export default Collaborators;
