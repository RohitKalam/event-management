import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const UpdateCatererModal = ({ show, onHide, caterer }) => {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    experience: "",
    contact: "",
  });

  useEffect(() => {
    if (caterer) {
      setFormData({
        name: caterer.name || "",
        cuisine: caterer.cuisine || "",
        experience: caterer.experience || "",
        contact: caterer.contact || "",
      });
    }
  }, [caterer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Caterer details updated successfully!");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Caterer</Modal.Title>
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
                <Form.Label>Cuisine</Form.Label>
                <Form.Control type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} required />
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
            Update Caterer
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateCatererModal;
