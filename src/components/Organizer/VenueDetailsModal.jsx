import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

const VenueDetailsModal = ({ show, onHide, venues }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Venue Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Venue Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {venues.map((venue, index) => (
              <tr key={index}>
                <td>{venue.name}</td>
                <td>
                  <span className={`badge bg-${venue.status === "available" ? "success" : "danger"}`}>
                    {venue.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VenueDetailsModal;
