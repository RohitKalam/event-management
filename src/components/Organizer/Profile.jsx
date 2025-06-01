import OrgNavbar from "./OrgNavBar";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import profileImg from "../Organizer/img/profile.png"

const Profile = () => {

  const [formData, setFormData] = useState({
    em_firstname: "John",
    em_lastname: "Doe",
    em_email: "johndoe@email.com", // Non-editable
    em_mobile: "9876543210",
    em_profileimg: profileImg,// Default image
    em_address: "123 Event St, City",
    org_name: "Elite Event Planners",
    em_datejoining: "2025-06-15", // Non-editable
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, em_profileimg: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    alert("Profile Updated Successfully!");
  };

  return (
    <>
      <OrgNavbar /> {/* Always Visible */}
      <div className="d-flex">
        <Sidebar /> {/* Always Visible */}
        <div className="content w-100 p-3">

          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h4 className="h5">Profile</h4>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group w-100 me-2">


              </div>
            </div>
          </div>

          <div className="row px-4 ">

            {/* Profile Image Section */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <img src={formData.em_profileimg} className="rounded-circle mb-3" width="150" />
              <input type="file" accept="image/*" className="form-control" onChange={handleImageChange} />
            </div>

            {/* User Info Section */}
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* First Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" name="em_firstname" className="form-control" value={formData.em_firstname} onChange={handleChange} required />
                  </div>

                  {/* Last Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="em_lastname" className="form-control" value={formData.em_lastname} onChange={handleChange} required />
                  </div>

                  {/* Email (Non-editable) */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="em_email" className="form-control" value={formData.em_email} disabled />
                  </div>

                  {/* Mobile Number */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input type="tel" name="em_mobile" className="form-control" value={formData.em_mobile} onChange={handleChange} maxLength="10" required />
                  </div>

                  {/* Address */}
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Address</label>
                    <textarea name="em_address" className="form-control" value={formData.em_address} onChange={handleChange} required></textarea>
                  </div>

                  {/* Organization Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Organization Name</label>
                    <input type="text" name="org_name" className="form-control" value={formData.org_name} onChange={handleChange} required />
                  </div>

                  {/* Joining Date (Non-editable) */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Joining</label>
                    <input type="date" name="em_datejoining" className="form-control" value={formData.em_datejoining} disabled />
                  </div>
                </div>

                {/* Update Button */}
                <button type="submit" className="btn btn-success w-100">Update Profile</button>
              </form>
            </div>
          </div>




        </div>
      </div>
    </>);
};

export default Profile;
