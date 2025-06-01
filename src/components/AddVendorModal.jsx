import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const AddVendorModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    address: "",
    businessName: "",
    password: "",
  });

  const generateRandomPassword = () => {
    const randomPassword = Math.random().toString(36).slice(-8);
    setFormData({ ...formData, password: randomPassword });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Photographer added successfully! Password sent to email.");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Photographer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* First Name */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
              </Form.Group>
            </Col>

            {/* Last Name */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
              </Form.Group>
            </Col>

            {/* Mobile Number */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="tel" name="mobile" maxLength="10" value={formData.mobile} onChange={handleChange} required />
              </Form.Group>
            </Col>

            {/* Email */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>
            </Col>

            {/* Address */}
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" name="address" value={formData.address} onChange={handleChange} required />
              </Form.Group>
            </Col>

            {/* Business Name */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Business Name</Form.Label>
                <Form.Control type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
              </Form.Group>
            </Col>

            {/* Password Field + Generate Random Password */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="d-flex">
                  <Form.Control type="text" name="password" value={formData.password} onChange={handleChange} required />
                  <Button variant="outline-secondary ms-2" onClick={generateRandomPassword}>
                    Generate
                  </Button>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Button variant="success" type="submit" className="w-100">
            Add Photographer
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddVendorModal;
