import React from "react";
import { Modal, Button } from "react-bootstrap";

const EventRequestModal = ({ show, onHide, request }) => {
  if (!request) return null; // Prevent errors if request is undefined

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Event Request Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>User Name:</strong> {request.username}</p>
        <p><strong>Event Type:</strong> {request.eventType}</p>
        <p><strong>Date & Time:</strong> {request.dateTime}</p>
        <p><strong>Budget:</strong> {request.budget}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">Accept</Button>
        <Button variant="danger">Reject</Button>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventRequestModal;
