import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css"; // same CSS
import logo from "./logo.jpeg"; // same logo
import '@fortawesome/fontawesome-free/css/all.min.css';

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      console.log("res", res);
      navigate("/login");
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
            <h1>Create Your Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
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
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} ${styles.eye_icon}`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>

            {/* Social Media Icons */}
            <div className={styles.social_icons}>
              <p>Stay in touch with us</p>
            </div>
            <div className={styles.social_icons}>
              <a href="#" target="_blank" className="fab fa-facebook-f"></a>
              <a href="#" target="_blank" className="fab fa-twitter"></a>
              <a href="#" target="_blank" className="fab fa-instagram"></a>
              <a href="#" target="_blank" className="fab fa-linkedin-in"></a>
              <a href="#" target="_blank" className="fab fa-github"></a>
              <a href="#" target="_blank" className="fab fa-youtube"></a>
            </div>
          </form>
        </div>

        <div className={styles.right}>
          <h1>Already have an account?</h1>
          <br />
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
