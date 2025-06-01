import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../assets/profile.png";

import { useLocation } from "react-router-dom";
import UserNav from "./User/UserNav";


const organizersData = [
  { id: 1, name: "John Doe", email: "john@example.com", contact: "+91 9876543210", address: "Mumbai, India", image: profileImage, category: "Wedding" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", contact: "+91 9123456780", address: "Delhi, India", image: profileImage, category: "Corporate" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", contact: "+91 8745632109", address: "Bangalore, India", image: profileImage, category: "Party" },
];

const categories = ["All", "Wedding", "Corporate", "Party"];

const Organizers = () => {

  const location = useLocation();
  const showNav = location.pathname === "/index/Organizers"||location.pathname === "/index/organizers";


  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredOrganizers = selectedCategory === "All"
    ? organizersData
    : organizersData.filter(org => org.category === selectedCategory);

  return (
    <>
    {showNav && <UserNav />}
      <section className="container mt-2">
        {!showNav &&
        
        <h2 className="text-center mb-4">Event Organizers</h2>
        }

        {/* Category Selection */}
        <div className="text-center mb-4">
          {categories.map(category => (
            <button
              key={category}
              className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"} mx-2`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Organizer Cards */}
        <div className="row">
          {filteredOrganizers.map((organizer) => (
            <div key={organizer.id} className="col-md-4 col-sm-6">
              <div className="card shadow-lg text-center">
                <div className="d-flex flex-column align-items-center p-3">
                  <img src={organizer.image} className="rounded-circle mb-3" alt={organizer.name} style={{ width: "120px", height: "120px", objectFit: "cover" }} />
                  <h5 className="card-title">{organizer.name}</h5>
                  <p className="card-text"><strong>Email:</strong> {organizer.email}</p>
                  <p className="card-text"><strong>Contact:</strong> {organizer.contact}</p>
                  <p className="card-text"><strong>Address:</strong> {organizer.address}</p>
                  <p className="card-text"><strong>Category:</strong> {organizer.category}</p>
                  <button className="btn btn-primary mt-2">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Organizers;
