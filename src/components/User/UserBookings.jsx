import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserNav from "./UserNav";
import UpdateEventModal from "./UpdateEventModal";
import PaymentModal from "./PaymentModal";

const initialBookings = [
  { id: 1, eventName: "Wedding Ceremony", organizer: "John Events", dateTime: "2025-07-10T17:00", venue: "Mumbai Grand Hall", budget: 2400, paymentStatus: "Paid" },
  { id: 2, eventName: "Corporate Meetup", organizer: "Jane Smith", dateTime: "2025-08-15T10:00", venue: "Delhi Convention Center", budget: 2400,  paymentStatus: "Pending" },
];

const UserBookings = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [editData, setEditData] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleViewBooking = (booking) => {
    setSelectedBooking(booking);
    setEditData(booking);
    setShowUpdateModal(true);
  };

  const handleDeleteBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleUpdateBooking = () => {
    setBookings(bookings.map((booking) => (booking.id === editData.id ? editData : booking)));
    setShowUpdateModal(false);
  };

  const handleOpenPaymentModal = (booking) => {
    setSelectedBooking(booking);
    setShowPaymentModal(true);
  };

  return (
    <>
      <UserNav />
      <div className="container mt-4">
        <h6 className="text-start mb-2">My Bookings</h6>
        <hr />
        <div className="table-responsive">
          <table className="table table-striped table-hover shadow">
            <thead className="table-primary">
              <tr>
                <th>Sr No</th>
                <th>Event Name</th>
                <th>Organizer</th>
                <th>Date & Time</th>
                <th>Venue</th>
                <th>Budget</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.eventName}</td>
                  <td>{booking.organizer}</td>
                  <td>{new Date(booking.dateTime).toLocaleString()}</td>
                  <td>{booking.venue}</td>
                  <td>RS {booking.budget}</td>
                  <td>
                    <button className="btn btn-info btn-sm me-2" onClick={() => handleViewBooking(booking)}>View</button>
                    {booking.paymentStatus !== "Paid" && (
                      <button className="btn bg-warning btn-sm me-2" onClick={() => handleOpenPaymentModal(booking)}>Pay</button>
                    )}
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modals */}
        <UpdateEventModal show={showUpdateModal} handleClose={() => setShowUpdateModal(false)} editData={editData} handleEditChange={handleEditChange} handleUpdateBooking={handleUpdateBooking} />
        <PaymentModal show={showPaymentModal} handleClose={() => setShowPaymentModal(false)} selectedBooking={selectedBooking} />
      </div>
    </>
  );
};

export default UserBookings;
