import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserNav from "./UserNav";
import profileImg from "../../assets/profile.png"; // Replace with actual user profile image

const messagesData = [
    { id: 1, sender: "John Doe", text: "Hey, I’m available for your event!", time: "10:30 AM", unread: true },
    { id: 2, sender: "Jane Smith", text: "Let’s discuss the budget details.", time: "11:15 AM", unread: true },
    { id: 3, sender: "Mike Johnson", text: "I’ve sent the proposal document.", time: "2:45 PM", unread: true },
];

const Messages = () => {
    const [messages, setMessages] = useState(messagesData);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleSelectMessage = (msg) => {
        // Mark message as read
        const updatedMessages = messages.map((m) =>
            m.id === msg.id ? { ...m, unread: false } : m
        );
        setMessages(updatedMessages);
        setSelectedMessage(msg);
    };

    return (
        <>
            <UserNav />
            <div className="container mt-4">
                  <div className="row">
                    {/* Message List */}
                    <div className="col-md-4">
                        <div className="list-group shadow">
                            {messages.map((msg) => (
                                <button
                                    key={msg.id}
                                    className={`list-group-item list-group-item-action d-flex align-items-center ${selectedMessage?.id === msg.id ? "active" : ""}`}
                                    onClick={() => handleSelectMessage(msg)}
                                >
                                    {/* Profile Image */}
                                    <img src={profileImg} alt="Profile" className="rounded-circle me-2" width="40" />

                                    {/* Sender Details */}
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between">
                                            <strong>{msg.sender}</strong>
                                            <small>{msg.time}</small>
                                        </div>
                                        <p className="mb-0 text-muted text-truncate">{msg.text}</p>
                                    </div>

                                    {/* Unread Badge */}
                                    {msg.unread && (
                                        <span className="badge bg-danger ms-2">New</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Message Details */}
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
                                    <textarea className="form-control" placeholder="Type your reply..." rows="3"></textarea>
                                    <button className="btn btn-primary mt-3">Send</button>
                                </>
                            ) : (
                                <p className="text-center text-muted">Select a message to view details</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Messages;
