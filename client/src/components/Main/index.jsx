// Main.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Main = () => {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    if (storedFirstName && storedLastName) {
      setFullName(`${storedFirstName} ${storedLastName}`);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>M Afnan Khadim</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <h2>Welcome, {fullName || "Guest"}</h2>
    </div>
  );
};

export default Main;
