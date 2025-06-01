import React from "react";
import { Modal, Button } from "react-bootstrap";

const PaymentModal = ({ show, handleClose, selectedBooking }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Make Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedBooking && (
          <div className="text-center">
            <h5>{selectedBooking.eventName}</h5>
            <p>Organizer: {selectedBooking.organizer}</p>
            <p>Venue: {selectedBooking.venue}</p>
            <p>Date & Time: {selectedBooking.dateTime}</p>
            <button className="btn btn-success w-100">Proceed to Payment</button>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;
