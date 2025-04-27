import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "./logo.jpeg"; // Import the logo image
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      console.log("res", res);
      console.log("token", res.data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <img src={logo} alt="Logo" className={styles.logo} />

          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to VirtueMod</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <div className={styles.password_wrapper}>
              <input
                type={showPassword ? "text" : "password"} // Toggle between password and text type
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <i
  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} ${styles.eye_icon}`} // Merge class names
  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
></i>

            </div>
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>

            {/* Social Media Icons */}
            <div className={styles.social_icons}>
              <p>Stay touch with us</p>
            </div>
            <div className={styles.social_icons}>
              <a href="#" target="_blank" className="fab fa-facebook-f"></a>
              <a href="#" target="_blank" className="fab fa-twitter"></a>
              <a href="#" target="_blank" className="fab fa-instagram"></a>
              <a href="#" target="_blank" className="fab fa-linkedin-in"></a>
              <a href="#" target="_blank" className="fab fa-github"></a>
              <a href="#" target="_blank" className="fab fa-youtube"></a>
            </div>
			<br></br>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
		  <br></br>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
