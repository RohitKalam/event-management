import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const UpdatePhotographerModal = ({ show, onHide, photographer }) => {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    experience: "",
    contact: "",
  });

  // Load selected photographer details when the modal opens
  useEffect(() => {
    if (photographer) {
      setFormData({
        name: photographer.name || "",
        specialty: photographer.specialty || "",
        experience: photographer.experience || "",
        contact: photographer.contact || "",
      });
    }
  }, [photographer]);

  // Handle input changes for controlled form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulate form submission (replace with actual API call)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Photographer details updated successfully!");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Photographer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Specialty</Form.Label>
                <Form.Control type="text" name="specialty" value={formData.specialty} onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" name="experience" value={formData.experience} onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="w-100">
            Update Photographer
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdatePhotographerModal;
