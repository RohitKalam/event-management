import React, { useState } from "react";
import OrgNavbar from "./OrgNavBar";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

import UpdateVenueOwnerModal from "./UpdateVenueOwnerModal";
import AskToCollaborateModal from "./AskToCollaborateModal";
import VenueDetailsModal from "./VenueDetailsModal"; // ✅ New modal to show venue details
import AddVendorModal from "../AddVendorModal";

const Venues = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [showCollaborateModal, setShowCollaborateModal] = useState(false);
  const [selectedCollaborator, setSelectedCollaborator] = useState(null);
  const [showVenueDetailsModal, setShowVenueDetailsModal] = useState(false);
  const [selectedVenues, setSelectedVenues] = useState([]);

  // Sample Venue Owners Data
  const venueOwners = [
    {
      id: 1,
      name: "Michael Johnson",
      contact: "9876543210",
      venues: [
        { name: "Grand Hall", status: "booked" },
        { name: "Garden Space", status: "available" },
        { name: "Conference Room", status: "available" },
        { name: "Banquet Hall", status: "booked" },
        { name: "Rooftop Venue", status: "available" },
      ],
    },
    {
      id: 2,
      name: "Sarah Williams",
      contact: "8765432109",
      venues: [
        { name: "Luxury Ballroom", status: "booked" },
        { name: "Open-Air Theatre", status: "booked" },
      ],
    },
    {
      id: 3,
      name: "David Lee",
      contact: "7654321098",
      venues: [
        { name: "Heritage Palace", status: "available" },
        { name: "Club House", status: "available" },
        { name: "Poolside Venue", status: "available" },
        { name: "Grand Pavilion", status: "booked" },
        { name: "Exhibition Hall", status: "available" },
        { name: "VIP Lounge", status: "booked" },
        { name: "Garden Terrace", status: "available" },
        { name: "Mini Hall", status: "booked" },
      ],
    },
  ];

  // Filter venue owners based on search term
  const filteredOwners = venueOwners.filter((owner) =>
    owner.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply "Available Only" Filter
  const displayedOwners = showAvailableOnly
    ? filteredOwners.filter((owner) => owner.venues.some((venue) => venue.status === "available"))
    : filteredOwners;

  return (
    <>
      <OrgNavbar />
      <div className="d-flex">
        <Sidebar />
        <div className="content w-100 p-3">
          <div className="d-flex justify-content-between align-items-center pb-2 mb-3 border-bottom">
            <h4 className="h5">Venue Owners</h4>
            <div className="d-flex gap-2">
              {/* Search Bar */}
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search owners..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {/* Toggle Available Only */}
              <button
                className={`btn btn-${showAvailableOnly ? "secondary" : "info"} btn-sm`}
                onClick={() => setShowAvailableOnly(!showAvailableOnly)}
              >
                {showAvailableOnly ? "All" : "Available"}
              </button>
              {/* Add Venue Owner Button */}
              <button
                onClick={() => setShowModal(true)}
                className="btn btn-success btn-sm d-inline-flex align-items-center"
              >
                <i className="bi bi-plus me-2"></i> Add
              </button>
            </div>
          </div>

          {/* Venue Owners List Table */}
          <table className="table table-hover table-bordered">
            <thead className="table-secondary text-center">
              <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Venues Owned</th>
                <th>Venue Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {displayedOwners.map((owner, index) => {
                const bookedCount = owner.venues.filter((venue) => venue.status === "booked").length;
                const availableCount = owner.venues.filter((venue) => venue.status === "available").length;

                return (
                  <tr key={owner.id}>
                    <td>{index + 1}</td>
                    <td>{owner.name}</td>
                    <td>{owner.contact}</td>
                    <td>{owner.venues.length}</td>
                    <td>
                      <span className="badge bg-success">{availableCount} Available</span>
                      <span className="badge bg-danger ms-2">{bookedCount} Booked</span>
                    </td>
                    <td>
                      {/* View Venue Details Button */}
                      <button
                        className="btn btn-info btn-sm me-2"
                        onClick={() => {
                          setSelectedVenues(owner.venues);
                          setShowVenueDetailsModal(true);
                        }}
                      >
                        Details
                      </button>
                      {/* Collaboration Button */}
                      {availableCount > 0 && (
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => {
                            setSelectedCollaborator(owner);
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
                          setSelectedOwner(owner);
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
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Modal Components */}
        <AddVendorModal show={showModal} onHide={() => setShowModal(false)} />

        
        <UpdateVenueOwnerModal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} owner={selectedOwner} />
        <AskToCollaborateModal show={showCollaborateModal} onHide={() => setShowCollaborateModal(false)} collaborator={selectedCollaborator} />
        <VenueDetailsModal show={showVenueDetailsModal} onHide={() => setShowVenueDetailsModal(false)} venues={selectedVenues} />
      </div>
    </>
  );
};

export default Venues;
