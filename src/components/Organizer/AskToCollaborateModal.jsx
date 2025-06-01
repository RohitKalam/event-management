import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const AskToCollaborateModal = ({ show, onHide, collaborator }) => {
  const [formData, setFormData] = useState({
    eventType: "",
    budget: "",
    dateTime: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request sent to ${collaborator.name}!`);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Ask to Collaborate with {collaborator?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Event Type */}
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Event Type</Form.Label>
                <Form.Select name="eventType" value={formData.eventType} onChange={handleChange} required>
                  <option value="">Select an Event</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Concert">Concert</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Budget */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Budget ($)</Form.Label>
                <Form.Control type="number" name="budget" value={formData.budget} onChange={handleChange} required />
              </Form.Group>
            </Col>

            {/* Date & Time */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Date & Time</Form.Label>
                <Form.Control type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required />
              </Form.Group>
            </Col>

            {/* Message */}
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="success" type="submit" className="w-100">
            Send Request
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AskToCollaborateModal;
