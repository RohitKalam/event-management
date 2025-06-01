import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterEM = () => {
  const [formData, setFormData] = useState({
    em_firstname: "",
    em_lastname: "",
    em_email: "",
    em_mobile: "",
    
    em_address: "",
    org_name: "",
    em_password: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // navigate to dasboard
    // Here, you can send data to the backend via an API request
  };

  return (
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-4">
        <div className="col-10 col-sm-8 col-lg-6">
          <form
            onSubmit={handleSubmit}
            className="p-4 w-100 mx-auto border rounded "
          >
            <div className="row text-start">
              {/* First Name */}
              <div className="col-md-6 mb-3 ">
                <label className="form-label ">First Name</label>
                <input
                  type="text"
                  name="em_firstname"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="em_lastname"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="em_email"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
                {/** Mobile Number */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  name="em_mobile"
                  className="form-control"
                  maxLength="10" // Restricts input to 10 characters
                  value={formData.em_mobile}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/\D/g, ""); // Removes non-numeric characters
                    setFormData({
                      ...formData,
                      em_mobile: onlyNumbers.slice(0, 10),
                    }); // Limits to 10 digits
                  }}
                  required
                />
              </div>

              {/* Address */}
              <div className="col-12 mb-3">
                <label className="form-label">Address</label>
                <textarea
                  name="em_address"
                  className="form-control"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Organization Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Organization Name</label>
                <input
                  type="text"
                  name="org_name"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  maxLength="8"
                  name="em_password"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Register
            </button>
          </form>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 text-start    fw-bold text-body-emphasis lh-1 mb-3">
            Register to Event Management System.
          </h1>
          <p className="lead text-start">
            Manaing Events Makes Easy, Organize effectively.
          </p>
          <div className="text-start">
            <Link to="/signin">Already Have an Account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterEM;
