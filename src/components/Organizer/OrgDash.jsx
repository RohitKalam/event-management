import "bootstrap/dist/css/bootstrap.min.css";
import OrgNavbar from "./OrgNavBar";
import Sidebar from "./Sidebar";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const eventActions = [
  { text: "All Events", link: "/Dashboard/events", icon: "fas fa-calendar" },
  { text: "Events in Progress", link: "/Dashboard/events?status=In Progress", icon: "fas fa-play-circle" },
  { text: "Upcoming Events", link: "/Dashboard/events?status=Upcoming", icon: "fas fa-calendar-alt" },

];

const OrgDash = () => {

  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      };
      setDateTime(now.toLocaleString("en-US", options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <OrgNavbar /> {/* Always Visible */}
      <div className="d-flex">
        <Sidebar /> {/* Always Visible */}
        <div className="w-100 p-3 ">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">

            <h6 className="text-start mb-2">Dashboard</h6>
            <div className="btn-toolbar mb-2 mb-md-0">

              <div className="btn-group me-2">

                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary  d-flex align-items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar2-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  {dateTime}
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            {/**Event Requests */}
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-blue order-card">
                <div className="card-block">
                  <h6 className="m-b-20">Event Requests</h6>
                  <h2 className="text-end">
                    <i className="fa fa-calendar f-left mt-2"></i>
                    {/* dynamic number */}
                    <span >486</span>
                  </h2>
                  <p className="m-b-0">
                    Completed Events<span className="f-right">351</span>
                  </p>
                </div>
              </div>
            </div>

            {/**Venues */}
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-green order-card">
                <div className="card-block">
                  <h6 className="m-b-20">Venues</h6>
                  <h2 className="text-end">
                    <i className="fa fa-map-marker-alt mt-2 f-left"></i>
                    <span >486</span>
                  </h2>
                  <p className="m-b-0">
                    Available Venues<span className="f-right">351</span>
                  </p>
                </div>
              </div>
            </div>
            {/**Caterers */}
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-yellow order-card">
                <div className="card-block">
                  <h6 className="m-b-20">Caterers</h6>
                  <h2 className="text-end">
                    <i className="fa fa-utensils mt-2 f-left"></i>
                    <span >486</span>
                  </h2>
                  <p className="m-b-0">
                    Available Caterers<span className="f-right">351</span>
                  </p>
                </div>
              </div>
            </div>
            {/**Photographers */}
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-pink order-card">
                <div className="card-block">
                  <h6 className="m-b-20">Photograpers</h6>
                  <h2 className="text-end">
                    <i className="fa fa-camera mt-2 f-left"></i>
                    <span >486</span>
                  </h2>
                  <p className="m-b-0">
                    Available<span className="f-right">351</span>
                  </p>
                </div>
              </div>
            </div>



          </div>
          <h6 className="text-start mb-2">Quick Dashboard</h6>
          <hr />
          <div className="row g-3">
            {eventActions.map((action, index) => (
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
        <Outlet />
      </div>
    </>
  );
};

export default OrgDash;
