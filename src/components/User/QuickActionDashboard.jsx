import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const quickActions = [
  { text: "Create Event", link: "/index/create-event", icon: "fas fa-calendar-plus" },
  { text: "View My Bookings", link: "/index/Bookings", icon: "fas fa-calendar-check" },
  { text: "Find Organizers", link: "/index/organizers", icon: "fas fa-users" },
];

const QuickActionDashboard = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Quick Actions</h3>
      <div className="row g-3">
        {quickActions.map((action, index) => (
          <div key={index} className="col-md-4">
            <Link to={action.link} className="text-decoration-none">
              <div className="card text-center shadow-lg p-3">
                <i className={`${action.icon} fa-2x text-primary mb-3`}></i>
                <h6 className="fw-bold">{action.text}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActionDashboard;
