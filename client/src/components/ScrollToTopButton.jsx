import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const buttonStyle = {
    position: "fixed",
    bottom: "7.5rem",
    right: "1rem",
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #4f46e5, #8b5cf6)", // blue-purple gradient
    boxShadow:
      "0 4px 12px rgba(143, 85, 255, 0.4)", // subtle purple shadow
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    opacity: visible ? 1 : 0,
    visibility: visible ? "visible" : "hidden",
    transform: visible ? "translateY(0)" : "translateY(50px)",
    transition:
      "opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease",
  };

  const svgStyle = {
    fill: "none",
    stroke: "white",
    strokeWidth: 2,
    width: "24px",
    height: "24px",
    transition: "transform 0.2s ease",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.boxShadow =
      "0 6px 16px rgba(143, 85, 255, 0.7)";
    e.currentTarget.style.transform = "translateY(0) scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.boxShadow =
      "0 4px 12px rgba(143, 85, 255, 0.4)";
    e.currentTarget.style.transform = "translateY(0) scale(1)";
  };

  return (
    <button
      onClick={scrollToTop}
      style={buttonStyle}
      aria-label="Scroll to top"
      title="Scroll to top"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        style={svgStyle}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polyline points="6 15 12 9 18 15" />
      </svg>
    </button>
  );
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default ScrollToTopButton;
