
import { useState } from "react";
import "./App.css";

export default function App() {
  const [clicked, setClicked] = useState([]);

  const socialClick = (name, url) => {
    if (!clicked.includes(name)) setClicked([...clicked, name]);
    window.open(url, "_blank");
  };

  const unlocked = clicked.length >= 2;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="header">
          <h1>✨ Mystique Nail Bar WiFi</h1>
          <p>Follow at least 2 social pages to unlock WiFi access</p>
        </div>

        <div className="progress-indicator">
          <div className={`progress-dot ${clicked.includes("instagram") ? "active" : ""}`}></div>
          <div className={`progress-dot ${clicked.includes("tiktok") ? "active" : ""}`}></div>
        </div>

        <div className="social-buttons">
          <button 
            className="social-button" 
            onClick={() => socialClick("instagram", "https://instagram.com/mystique_nail_bar")}
            disabled={clicked.includes("instagram")}
          >
            {clicked.includes("instagram") && "✓"} Instagram
          </button>

          <button 
            className="social-button" 
            onClick={() => socialClick("tiktok", "https://tiktok.com/@mystique_nail_bar")}
            disabled={clicked.includes("tiktok")}
          >
            {clicked.includes("tiktok") && "✓"} TikTok
          </button>
        </div>

        {unlocked && (
          <div className="unlock-section">
            <div className="unlock-message">
              <h2><span className="celebrate-emoji">🎉</span> WiFi Unlocked! <span className="celebrate-emoji">🎉</span></h2>
              <p>You've earned access to our guest network</p>
            </div>

            <div className="wifi-details">
              <div className="wifi-detail-item">
                <span className="wifi-detail-label">Network:</span>
                <span className="wifi-detail-value">Mallary</span>
                <button className="copy-button" onClick={() => copyToClipboard("Mallary")}>
                  Copy
                </button>
              </div>
              <div className="wifi-detail-item">
                <span className="wifi-detail-label">Password:</span>
                <span className="wifi-detail-value">@beforeafter@123#
                </span>
                <button className="copy-button" onClick={() => copyToClipboard("@beforeafter@123#")}>
                  Copy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

