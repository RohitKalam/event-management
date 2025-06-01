import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import OrgNavbar from './OrgNavBar';
import Sidebar from './Sidebar';
import profileImg from "../../assets/profile.png";

const initialMessages = [
    { id: 1, sender: "Rohit Sharma", text: "Looking forward to working with you!", time: "09:15 AM", unread: true },
    { id: 2, sender: "Anita Verma", text: "Do you have any special requirements?", time: "11:45 AM", unread: true },
    { id: 3, sender: "Vinay Patel", text: "I’ve shared the event details in the document.", time: "3:20 PM", unread: true },
];

function OMessages() {
    const [messages, setMessages] = useState(initialMessages);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [reply, setReply] = useState("");

    const handleSelectMessage = (msg) => {
        // Mark message as read
        const updatedMessages = messages.map(m =>
            m.id === msg.id ? { ...m, unread: false } : m
        );
        setMessages(updatedMessages);
        setSelectedMessage(msg);
    };

    const handleSendReply = () => {
        if (reply.trim()) {
            alert(`Reply sent to ${selectedMessage.sender}: ${reply}`);
            setReply("");
        }
    };

    return (
        <>
            <OrgNavbar />
            <div className="d-flex">
                <Sidebar />
                <div className="content w-100 p-3">
                    <h6 className="text-start mb-2">Messages</h6>
                    <hr />
                    <div className="row">
                        {/* Message List */}
                        <div className="col-md-4">
                            <div className="list-group shadow" style={{ maxHeight: "400px", overflowY: "auto" }}>
                                {messages.map((msg) => (
                                    <button
                                        key={msg.id}
                                        className={`list-group-item list-group-item-action d-flex align-items-center justify-content-between ${selectedMessage?.id === msg.id ? "active" : ""}`}
                                        onClick={() => handleSelectMessage(msg)}
                                        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                                    >
                                        <div className="d-flex align-items-center flex-wrap">
                                            {/* Profile Image */}
                                            <img src={profileImg} alt="Profile" className="rounded-circle me-2" width="40" />

                                            {/* Sender Details */}
                                            <div>
                                                <strong className="d-block">{msg.sender}</strong>
                                                <small className="text-muted">{msg.time}</small>
                                            </div>
                                        </div>

                                        {/* Unread Badge */}
                                        {msg.unread && <span className="badge bg-danger">New</span>}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Message Details & Reply Section */}
                        <div className="col-md-8">
                            <div className="card shadow p-3">
                                {selectedMessage ? (
                                    <>
                                        <div className="d-flex align-items-center">
                                            <img src={profileImg} alt="Profile" className="rounded-circle me-3" width="50" />
                                            <h5 className="fw-bold">{selectedMessage.sender}</h5>
                                        </div>
                                        <p className="text-muted">{selectedMessage.time}</p>
                                        <p className="mt-3">{selectedMessage.text}</p>

                                        {/* Reply Box */}
                                        <textarea
                                            className="form-control"
                                            placeholder="Type your reply..."
                                            rows="3"
                                            value={reply}
                                            onChange={(e) => setReply(e.target.value)}
                                        ></textarea>
                                        <button className="btn btn-primary mt-3" onClick={handleSendReply}>Send</button>
                                    </>
                                ) : (
                                    <p className="text-center text-muted">Select a message to view details</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OMessages;
