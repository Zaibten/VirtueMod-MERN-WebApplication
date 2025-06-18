import React, { useState, useEffect } from "react";

const ThreeDModel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const iframeSrc = import.meta.env.VITE_GRADIO_URL || "";


  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    setIsLoggedIn(email && token && username ? true : false);
  }, []);

  const handleLoginClick = () => {
    window.location.href = "/register";
  };

  const headingFontSize = window.innerWidth < 600 ? "1.8rem" : "3rem";

  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", padding: 20, fontFamily: "'Inter', sans-serif" }}id="3dmodel">


<h1
  style={{
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: "0.05em",
    color: "#eee",
    marginBottom: "2rem",
    fontSize: "3rem",
    lineHeight: 1.2, // default line height for desktop
  }}
  className="responsive-heading"
>
  Generate Virtue Mod Model
</h1>

<style>
  {`
    @media (max-width: 600px) {
      .responsive-heading {
        font-size: 1.8rem !important;
        margin-bottom: 1.5rem !important;
        line-height: 1.4 !important; /* more spacing between wrapped lines */
      }
    }
  `}
</style>



      <div
        style={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 80px)", // subtract approx heading height
          overflow: "hidden",
          borderRadius: 0,
          backgroundColor: "#1e1e1e",
        }}
      >
        <iframe
          title="3D Model Viewer"
          src="https://8893a8a16e44040f88.gradio.live/"
          // src={iframeSrc}
          allow="autoplay; fullscreen; vr"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: 0,
            filter: isLoggedIn ? "none" : "brightness(0.5) blur(1.2px)",
            pointerEvents: isLoggedIn ? "auto" : "none",
            transition: "filter 0.4s ease",
          }}
        />
        {!isLoggedIn && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#222222dd",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(12px)",
              borderRadius: 0,
              color: "#bbbbbb",
              textAlign: "center",
              padding: 32,
              userSelect: "none",
            }}
          >
            <LockIcon />
            <h2 style={{ fontSize: "2.25rem", fontWeight: "600", marginBottom: 12, color: "#e0e0e0" }}>
              Access Locked
            </h2>
            <p style={{ fontSize: "1.1rem", marginBottom: 28, color: "#aaaaaa", maxWidth: 360 }}>
              You need to log in to unlock this content.
            </p>
            <button
              onClick={handleLoginClick}
              style={{
                background: "linear-gradient(135deg, #5c4dff, #8338ec)",
                color: "#fff",
                padding: "14px 48px",
                borderRadius: 32,
                border: "none",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(131, 56, 236, 0.6)",
                transition: "all 0.3s ease",
              }}
            >
              Login to Continue
            </button>
          </div>
        )}
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

export default ThreeDModel;
