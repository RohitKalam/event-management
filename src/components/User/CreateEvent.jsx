import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserNav from "./UserNav";

const demoOrganizers = [
  "John Events",
  "Jane Smith - Corporate Planner",
  "Mike Johnson - Party Expert",
  "Emily Carter - Wedding Specialist",
];

const demoVenues = [
  "Mumbai Grand Hall",
  "Delhi Convention Center",
  "Bangalore Palace",
  "Hyderabad Exhibition Center",
];

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    dateTime: "",
    capacity: "",
    budget: "",
    description: "",
    organizer: "",
    venue: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", formData);
    alert("Event Created Successfully!");
  };

  return (
    <>
      <UserNav />
      <div className="container w-75 mt-4">
        <h6 className="text-start mb-2">Create New Event</h6>
        <hr />
        <div className="p-2">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Event Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Event Name</label>
                <input type="text" className="form-control" name="eventName" value={formData.eventName} onChange={handleChange} required />
              </div>

              {/* Date & Time */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Date & Time</label>
                <input type="datetime-local" className="form-control" name="dateTime" value={formData.dateTime} onChange={handleChange} required />
              </div>

              {/* Organizer Selection */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Organizer</label>
                <select className="form-select" name="organizer" value={formData.organizer} onChange={handleChange} required>
                  <option value="">Select Organizer</option>
                  {demoOrganizers.map((org, index) => (
                    <option key={index} value={org}>{org}</option>
                  ))}
                </select>
              </div>

              {/* Venue Selection */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Venue</label>
                <select className="form-select" name="venue" value={formData.venue} onChange={handleChange} required>
                  <option value="">Select Venue</option>
                  {demoVenues.map((venue, index) => (
                    <option key={index} value={venue}>{venue}</option>
                  ))}
                </select>
              </div>

              {/* Capacity */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Capacity</label>
                <input type="number" className="form-control" name="capacity" value={formData.capacity} onChange={handleChange} required />
              </div>

              {/* Budget */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Budget</label>
                <input type="number" className="form-control" name="budget" value={formData.budget} onChange={handleChange} required />
              </div>

              {/* Description */}
              <div className="col-md-12 mb-3">
                <label className="form-label">Describe Your Event</label>
                <textarea className="form-control" name="description" rows="2" value={formData.description} onChange={handleChange} required></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">Create Event</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
