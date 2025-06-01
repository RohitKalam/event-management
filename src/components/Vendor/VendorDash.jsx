import "bootstrap/dist/css/bootstrap.min.css";

import VendorSidebar from "./VendorSidebar"; // New sidebar for vendors
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import VendorNav from "./VendorNav";
import Calendar from "react-calendar";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
const VendorDash = () => {
    const [dateTime, setDateTime] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const eventDates = {
        "2025-06-01": { status: "today", details: "Wedding, 5 PM, Grand Hall" },
        "2025-06-02": { status: "completed", details: "Corporate Meeting, 10 AM, Conference Room" },
        "2025-06-03": { status: "canceled", details: "Birthday Party, Canceled" },
    };

    const getTileClass = ({ date }) => {
        const formattedDate = date.toISOString().split("T")[0];
        switch (eventDates[formattedDate]?.status) {
            case "today": return "bg-success text-white"; // Green
            case "completed": return "bg-warning text-dark"; // Yellow
            case "canceled": return "bg-danger text-white"; // Red
            default: return "";
        }
    };
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
                second: "2-digit",
            };
            setDateTime(now.toLocaleString("en-US", options));
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <VendorNav />
            <div className="d-flex">
                <VendorSidebar /> {/* Sidebar tailored for vendors */}
                <div className="w-100 p-3">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        <h1 className="h5">Dashboard</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <Button variant="btn btn-sm btn-outline-secondary  d-flex align-items-center gap-1" onClick={() => setShowCalendar(true)}>
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
                                </Button>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/**Event Requests */}
                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-blue order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Event Orders</h6>
                                    <h2 className="text-end">
                                        <i className="fa fa-clipboard-list f-left mt-2"></i>
                                        {/* dynamic number */}
                                        <span>
                                            <Link to="/My-Dashboard/requests" className="text-decoration-none text-dark">
                                                123
                                            </Link>
                                        </span>
                                    </h2>
                                    <p className="m-b-0">
                                        Completed <span className="f-right">351</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/**Completed Events */}
                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-green order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Bookings</h6>
                                    <h2 className="text-end">
                                        <i className="fa fa-calendar-check mt-2 f-left"></i>
                                        <span >486</span>
                                    </h2>
                                    <p className="m-b-0">
                                        Details<span className="f-right">
                                            <Link to="/My-Dashboard/orders?sts=Upcoming" className="text-decoration-none text-dark">
                                                View
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/**Ongoing */}
                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-yellow order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Todays Bokkings</h6>
                                    <h2 className="text-end">
                                        <i className="fa fa-calendar-plus mt-2 f-left"></i>
                                        <span >486</span>
                                    </h2>
                                    <p className="m-b-0">
                                        Details<span className="f-right">
                                            <Link to="/My-Dashboard/orders?sts=In Progress" className="text-decoration-none text-dark">
                                                View
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/**Cancelled */}
                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-pink order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Canceled Events</h6>
                                    <h2 className="text-end">
                                        <i className="fa fa-calendar-times mt-2 f-left"></i>
                                        <span >486</span>
                                    </h2>
                                    {/* Link for navigation to the Events List page */}
                                    <p className="m-b-0">
                                        Details<span className="f-right">
                                            <Link to="/My-Dashboard/orders?sts=cancelled" className="text-decoration-none text-dark">
                                                View
                                            </Link>
                                        </span>
                                    </p>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                {/* Modal for Calendar */}
                <Modal show={showCalendar} onHide={() => setShowCalendar(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Booking Calendar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <Calendar
                            tileClassName={getTileClass}
                            onClickDay={(date) => alert(eventDates[date.toISOString().split("T")[0]]?.details || "No event")}
                        /> */}
                        <Calendar
                            className="custom-calendar"
                            tileClassName={getTileClass}
                            tileContent={({ date }) => {
                                const formattedDate = date.toISOString().split("T")[0];
                                const event = eventDates[formattedDate];
                                return event ? (
                                    <OverlayTrigger placement="top" overlay={<Tooltip>{event.details}</Tooltip>}>
                                        <span className="d-block w-100 h-100 text-center"></span>
                                    </OverlayTrigger>
                                ) : null;
                            }}
                        />

                    </Modal.Body>
                </Modal>
                <Outlet />
            </div>
        </>
    );
};

export default VendorDash;
