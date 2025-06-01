import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import VendorNav from "./VendorNav";
import VendorSidebar from "./VendorSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function VendorOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState(""); // Tracks current filter
  
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Extract "sts" query parameter from URL
  useEffect(() => {
    const urlFilter = searchParams.get("sts");
    if (urlFilter) setFilter(urlFilter);
  }, [location.search]);

  const vendorOrders = [
    { id: 1, organizer: "Elite Event Planners", eventName: "Corporate Gala", dateTime: "2025-06-20 18:00", proposedRate: "$7000", sts: "Upcoming" },
    { id: 2, organizer: "Grand Celebrations", eventName: "Wedding Reception", dateTime: "2025-07-05 15:00", proposedRate: "$9500", sts: "In Progress" },
    { id: 3, organizer: "Premier Events", eventName: "Music Festival", dateTime: "2025-08-12 20:00", proposedRate: "$12000", sts: "Cancelled" },
  ];

  // Filter orders based on the selected status
  const filteredOrders = vendorOrders.filter(
    (order) =>
      (filter ? order.sts.toLowerCase() === filter.toLowerCase() : true) &&
      (order.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.dateTime.includes(searchTerm))
  );

  return (
    <>
      <VendorNav />
      <div className="d-flex">
        <VendorSidebar />
        <div className="content w-100 p-3">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h4 className="h5">Vendor Orders</h4>
            <div className="d-flex mb-2 mb-md-0 gap-2">
              {/* Search Bar */}
              <input type="text" className="form-control w-50" placeholder="Search orders..." onChange={(e) => setSearchTerm(e.target.value)} />

              {/* Filter Buttons */}
              <button className="btn bg-c-pink text-white" onClick={() => setFilter("Cancelled")}>Cancelled</button>
              <button className="btn bg-c-green text-white" onClick={() => setFilter("In Progress")}>Todays</button>
              <button className="btn bg-c-yellow text-dark" onClick={() => setFilter("Upcoming")}>Upcoming</button>
              <button className="btn btn-outline-secondary" onClick={() => setFilter("")}>Clear</button>
            </div>
          </div>

          <table className="table table-hover table-bordered">
            <thead className="table-secondary text-center">
              <tr>
                <th>Sr. No</th>
                <th>Organizer</th>
                <th>Event Name</th>
                <th>Date & Time</th>
                <th>Proposed Rate</th>
                <th>Status</th> {/* Status column */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredOrders.map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>{order.organizer}</td>
                  <td>{order.eventName}</td>
                  <td>{order.dateTime}</td>
                  <td>{order.proposedRate}</td>
                  <td>
                    <span className={`badge ${order.sts === "Cancelled" ? "bg-c-pink" : order.sts === "In Progress" ? "bg-c-green" : "bg-c-yellow"} text-white`}>
                      {order.sts}
                    </span>
                  </td>
                  <td>
                    {/* Accept & Reject Buttons */}
                    {/* <button className="btn btn-success me-2">
                      <FontAwesomeIcon icon={faCheck} />
                    </button> */}
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
    </>
  );
}

export default VendorOrders;
