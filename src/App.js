import React, { useState, useEffect } from "react";
import "./App.css";
import crcLogo from "./crc.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (
      isOpen &&
      !e.target.closest(".chat-container") &&
      !e.target.closest(".chat-bubble")
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="App">
      <div className="welcome-message">
        <div className="title-container">
          <img src={crcLogo} alt="Red Cross Logo" className="logo" />
          <h2>Canadian Red Cross</h2>
        </div>
      </div>

      <div
        className={`chat-bubble ${isOpen ? "hidden" : ""}`}
        onClick={toggleChat}
      ></div>

      <div className={`chat-container ${isOpen ? "open" : ""}`}>
        <div className="chat-header" onClick={toggleChat}>
          <h3></h3>
          <button
            className="chat-toggle"
            onClick={(e) => {
              e.stopPropagation();
              toggleChat();
            }}
          ></button>
        </div>
        <iframe
          className="chat-iframe"
          src="https://web.powerva.microsoft.com/environments/2cae4a66-a5f8-eac7-af4a-752a8408c01d/bots/cr1dd_redCrossVolunteer/webchat?__version__=2"
          frameBorder="0"
          title="Red Cross Chat"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
