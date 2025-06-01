import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for event organizers: ${searchQuery}`);
    // You can implement API search here
  };

  return (
    <section className="hero-section text-center py-5 bg-primary text-white">
  <div className="container">
    <h1 className="mb-4">Find Event Organizers Near You</h1>
    <p className="mb-4">Search for the best event planners to make your event memorable!</p>
    <div className="row justify-content-center">
      <div className="col-md-6 col-12">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search event organizers..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>
      <div className="col-md-auto col-12 mt-2 mt-md-0">
        <button className="btn btn-warning" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
