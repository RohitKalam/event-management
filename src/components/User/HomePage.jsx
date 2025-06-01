import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserNav from "./UserNav";
import profleImg from "../../assets/profile.png";
import QuickActionDashboard from "./QuickActionDashboard";
const organizers = [
    { id: 1, name: "John Doe", category: "Wedding Planner", img: profleImg },
    { id: 2, name: "Jane Smith", category: "Event Coordinator", img: profleImg },
    { id: 3, name: "Mike Johnson", category: "Concert Organizer", img: profleImg },
];

const UserHome = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");

    const filteredOrganizers = organizers.filter((org) =>
        org.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category ? org.category === category : true)
    );

    return (
        <>
            <UserNav />
            <div className="container mt-5">
                {/* Enhanced Search and Filter Section */}
                <div className="container">
                    <div className="card shadow p-4 mb-4">
                        <h4 className="text-center mb-3">Find Your Perfect Organizer</h4>
                        <div className="row g-3 align-items-center">
                            {/* Search Input */}
                            <div className="col-md-6">
                                <div className="input-group">
                                    <span className="input-group-text bg-primary text-white">
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by name..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Category Dropdown */}
                            <div className="col-md-4">
                                <select className="form-select form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Select Category</option>
                                    <option value="Wedding Planner">Wedding Planner</option>
                                    <option value="Event Coordinator">Event Coordinator</option>
                                    <option value="Concert Organizer">Concert Organizer</option>
                                </select>
                            </div>

                            {/* Search Button */}
                            <div className="col-md-2">
                                <button className="btn btn-primary w-100">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <QuickActionDashboard />

                {/* Organizer Results */}
                {/* Organizer Results (Hidden Until Search) */}
                {searchTerm && (
                    <div className="row">
                        {filteredOrganizers.map((org) => (
                            <div key={org.id} className="col-md-4 mb-4">
                                <div className="card text-center p-3">
                                    <img src={org.img} alt="Profile" className="mx-auto d-block rounded-circle" width="80" />
                                    <h5 className="mt-3">{org.name}</h5>
                                    <p className="text-muted">{org.category}</p>
                                    <div className="d-flex justify-content-center gap-3">
                                        <button className="btn btn-outline-primary">View</button>
                                        <button className="btn btn-success">Book</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </>
    );
};

export default UserHome;
