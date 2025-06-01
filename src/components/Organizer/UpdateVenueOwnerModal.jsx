import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const UpdateVenueOwnerModal = ({ show, onHide, owner }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    venuesOwned: "",
  });

  useEffect(() => {
    if (owner) {
      setFormData({
        name: owner.name || "",
        contact: owner.contact || "",
        venuesOwned: owner.venuesOwned || "",
      });
    }
  }, [owner]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Venue owner details updated successfully!");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Venue Owner</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Number of Venues Owned</Form.Label>
                <Form.Control type="number" name="venuesOwned" value={formData.venuesOwned} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="w-100">
            Update Venue Owner
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateVenueOwnerModal;
