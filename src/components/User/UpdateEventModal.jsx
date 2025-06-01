import React from "react";
import { Modal, Button } from "react-bootstrap";

const UpdateEventModal = ({ show, handleClose, editData, handleEditChange, handleUpdateBooking }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Booking</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {editData && (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Event Name</label>
                <input type="text" className="form-control" name="eventName" value={editData.eventName} onChange={handleEditChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Organizer</label>
                <input type="text" className="form-control" readOnly name="organizer" value={editData.organizer} onChange={handleEditChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Date & Time</label>
                <input type="datetime-local" className="form-control" name="dateTime" value={editData.dateTime} onChange={handleEditChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Venue</label>
                <input type="text" className="form-control" name="venue" value={editData.venue} onChange={handleEditChange} />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Budget</label>
                <input type="number" className="form-control" name="budget" value={editData.budget || ""} onChange={handleEditChange} />
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleUpdateBooking}>Update Booking</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateEventModal;
