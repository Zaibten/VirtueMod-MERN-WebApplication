import React, { useState, useEffect } from "react";

const ThreeDModel = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // On mount, check localStorage for email, token and username
  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    setIsLoggedIn(email && token && username ? true : false);
  }, []);

  const handleLoginClick = () => {
    // Redirect to /register page
    window.location.href = "/register";
  };

  return (
    <div>
    
    <h1 style={styles.heading} id="3dmodel">Generate Virtua Mod Model</h1>
    <div style={styles.page}>
      <div style={styles.iframeContainer}>
        <iframe
          title="3D Model Viewer"
          src="https://www.google.com/"
          allow="autoplay; fullscreen; vr"
          allowFullScreen
          style={{
            ...styles.iframe,
            filter: isLoggedIn ? "none" : "brightness(0.5) blur(1.2px)",
            pointerEvents: isLoggedIn ? "auto" : "none",
          }}
        />
        {!isLoggedIn && (
          <div style={styles.lockOverlay}>
            <LockIcon />
            <h2 style={styles.title}>Access Locked</h2>
            <p style={styles.subtitle}>You need to log in to unlock this content.</p>
            <button onClick={handleLoginClick} style={styles.button}>
              Login to Continue
            </button>
            {showLogin && (
              <p style={styles.loginMsg}>Login functionality coming soon…</p>
            )}
          </div>
        )}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
        @keyframes fadeScaleIn {
          0% {
            opacity: 0;
            transform: scale(0.92);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
    </div>
  );
};

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 56, height: 56, marginBottom: 18 }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="#8a8a8a"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="11" width="14" height="9" rx="2" ry="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#121212",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Inter', sans-serif",
    padding: 20,
  },
  iframeContainer: {
    position: "relative",
    width: "90vw",
    maxWidth: 1000,
    height: "75vh",
    borderRadius: 20,
    boxShadow:
      "20px 20px 60px #0a0a0a, -20px -20px 60px #1f1f1f",
    overflow: "hidden",
    backgroundColor: "#1e1e1e",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: 20,
    transition: "filter 0.4s ease",
  },
  lockOverlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#222222dd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(12px)",
    borderRadius: 20,
    boxShadow:
      "inset 8px 8px 12px #1a1a1a, inset -8px -8px 12px #2b2b2b",
    color: "#bbbbbb",
    textAlign: "center",
    padding: 32,
    animation: "fadeScaleIn 0.3s ease forwards",
    userSelect: "none",
  },
  title: {
    fontSize: "2.25rem",
    fontWeight: "600",
    marginBottom: 12,
    color: "#e0e0e0",
  },
  subtitle: {
    fontSize: "1.1rem",
    marginBottom: 28,
    color: "#aaaaaa",
    maxWidth: 360,
  },
  button: {
    background:
      "linear-gradient(135deg, #5c4dff, #8338ec)",
    color: "#fff",
    padding: "14px 48px",
    borderRadius: 32,
    border: "none",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(131, 56, 236, 0.6)",
    transition: "all 0.3s ease",
  },
    heading: {
      textAlign:'center',
    fontSize: "3rem",
    marginBottom: 50,
    fontWeight: "800",
    letterSpacing: "0.05em",
  },
  loginMsg: {
    marginTop: 20,
    fontSize: "0.9rem",
    fontStyle: "italic",
    color: "#999999",
  },
};

export default ThreeDModel;
