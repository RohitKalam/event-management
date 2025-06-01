import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VendorNav from "./VendorNav";
import VendorSidebar from "./VendorSidebar";
import profileImg from "../../assets/profile.png"; // Default profile image

const VendorProfile = () => {
  const [formData, setFormData] = useState({
    profile_image: profileImg, // Default image
    firstname: "Jane",
    lastname: "Doe",
    mobile: "9876543210",
    email: "janedoe@email.com", // Non-editable
    address: "456 Vendor Lane, City",
    business_name: "Premier Catering Services",
    created_at: "2025-06-15", // Non-editable
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profile_image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    alert("Profile Updated Successfully!");
  };

  return (
    <>
      <VendorNav />
      <div className="d-flex">
        <VendorSidebar />
        <div className="content w-100 p-3">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h4 className="h5">Vendor Profile</h4>
          </div>

          <div className="row px-4">
            {/* Profile Image Section */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <img src={formData.profile_image} className="rounded-circle mb-3" width="150" />
              <input type="file" accept="image/*" className="form-control" onChange={handleImageChange} />
            </div>

            {/* Vendor Info Section */}
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* First Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" name="firstname" className="form-control" value={formData.firstname} onChange={handleChange} required />
                  </div>

                  {/* Last Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="lastname" className="form-control" value={formData.lastname} onChange={handleChange} required />
                  </div>

                  {/* Email (Non-editable) */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" value={formData.email} disabled />
                  </div>

                  {/* Mobile Number */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input type="tel" name="mobile" className="form-control" value={formData.mobile} onChange={handleChange} maxLength="10" required />
                  </div>

                  {/* Address */}
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Address</label>
                    <textarea name="address" className="form-control" value={formData.address} onChange={handleChange} required></textarea>
                  </div>

                  {/* Business Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Business Name</label>
                    <input type="text" name="business_name" className="form-control" value={formData.business_name} onChange={handleChange} required />
                  </div>

                  {/* Joining Date (Non-editable) */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Registration</label>
                    <input type="date" name="created_at" className="form-control" value={formData.created_at} disabled />
                  </div>
                </div>

                {/* Update Button */}
                <button type="submit" className="btn btn-success w-100">Update Profile</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorProfile;
