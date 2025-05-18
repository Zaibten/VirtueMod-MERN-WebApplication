import React, { useEffect, useRef, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Register = () => {
  const containerRef = useRef(null);
  const passwordRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [modalMessage, setModalMessage] = useState("");
const [showModal, setShowModal] = useState(false);

const openModal = (message) => {
  setModalMessage(message);
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
};

  // Toggle sign-in / sign-up mode
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = containerRef.current;

    if (sign_up_btn && sign_in_btn && container) {
      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });

      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    }

    // Cleanup listeners on unmount
    return () => {
      if (sign_up_btn && sign_in_btn && container) {
        sign_up_btn.removeEventListener("click", () => {
          container.classList.add("sign-up-mode");
        });
        sign_in_btn.removeEventListener("click", () => {
          container.classList.remove("sign-up-mode");
        });
      }
    };
  }, []);

  // Handle password eye icon click
  const togglePassword = () => {
    setShowPassword(prev => !prev);
    if (passwordRef.current) {
      passwordRef.current.type = showPassword ? "password" : "text";
    }
  };
// For Register
const handleRegister = async (e) => {
  e.preventDefault();

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    // openModal("Password must be at least 8 characters long.");
    return;
  }

  const res = await fetch("https://virtuemodserver.vercel.app/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await res.json();

  if (res.ok) {
    openModal("Registration successful!");
    setUsername("");
    setEmail("");
    setPassword("");

    const container = containerRef.current;
    if (container) {
      container.classList.remove("sign-up-mode");
    }
  } else {
    alert(data.message);
  }
};



// Login
const handleLogin = async (e) => {
  e.preventDefault();
  const res = await fetch("https://virtuemodserver.vercel.app/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
    localStorage.setItem("username", data.username);
    openModal("Login successful!");

    // Redirect to home page after login
    window.location.href = "/"; // change to your actual home page route
  } else {
    alert(data.message);
  }
};


  return (
    <>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body,
input {
  font-family: 'Montserrat', sans-serif;
}

.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.toggle-password {
  position: absolute;
  right: 15px;
  top: 0px;
  cursor: pointer;
  background: linear-gradient(135deg, #2B2B2B, #6A0DAD, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #2B2B2B, #6A0DAD, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.5s;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
  background: linear-gradient(135deg, #2B2B2B, #6A0DAD, #FFFFFF);
  color: white;
  border: none;
}

.social-icon:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.btn {
  width: 150px;
  background: linear-gradient(135deg, #2B2B2B, #6A0DAD, #FFFFFF);
  border: none;
  outline: none;
  height: 49px;
  border-radius: 4px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  filter: brightness(1.2);
}

.btn.transparent {
  background: linear-gradient(135deg, #2B2B2B, #6A0DAD, #FFFFFF);
  border: none;
  color: white;
}

.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(135deg, #2B2B2B 0%, #6A0DAD 50%, #FFFFFF 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
  filter: brightness(0.85);
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }

  .signin-signup {
    width: 100%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .signin-signup,
  .container.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 200px;
  }

  .panel .content {
    padding-right: 15%;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .container:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }

  .panel .content {
    padding: 0.5rem 1rem;
  }

  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}
`}</style>

  <div className="container" ref={containerRef}>
    <div className="forms-container">
      <div className="signin-signup">
        {/* Sign In Form */}
   <form onSubmit={handleLogin} className="sign-in-form">
  <h2 className="title">Sign in</h2>
  <div className="input-field">
    <i className="fas fa-envelope"></i>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>
  <div className="input-field">
    <i className="fas fa-lock"></i>
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      value={password}
      ref={passwordRef}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <i
      className="fas fa-eye toggle-password"
      onClick={togglePassword}
    ></i>
  </div>
  <button type="submit" className="btn">Sign in</button>
</form>


        {/* Sign Up Form */}
     <form onSubmit={handleRegister} className="sign-up-form">
  <h2 className="title">Sign up</h2>
  <div className="input-field">
    <i className="fas fa-user"></i>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
    />
  </div>
  <div className="input-field">
    <i className="fas fa-envelope"></i>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>
  <div className="input-field">
    <i className="fas fa-lock"></i>
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      value={password}
      ref={passwordRef}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <i
      className="fas fa-eye toggle-password"
      onClick={togglePassword}
    ></i>
  </div>
  <button type="submit" className="btn">Sign up</button>
</form>

      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>Welcome to Virtue Mod</h3>
          <p>
            Sign up and enter in the world of Artificial Intelligence !!!
          </p>
          <button className="btn transparent" id="sign-up-btn">
            Sign up
          </button>
          <br></br>
  <br></br>
  <a href="/" style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}>
    Proceed to Home
  </a>
        </div>
        <img
          src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
          className="image"
          alt="Register"
        />
      </div>
      <div className="panel right-panel">
        <div className="content">
  <h3>Already a user ?</h3>
  <p>
    Sign in and continue your AI journey with us!
  </p>
  <button className="btn transparent" id="sign-in-btn">
    Sign in
  </button>
  <br></br>
  <br></br>
  <a href="/" style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}>
    Proceed to Home
  </a>
</div>

        <img
          src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
          className="image"
          alt="Login"
        />
      </div>
    </div>
  </div>


{showModal && (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      background:
        'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0))',
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10000,
      animation: 'bgFadeIn 0.5s ease forwards',
    }}
    onClick={closeModal}
  >
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '30px',
        padding: '50px 40px 40px 40px',
        maxWidth: '480px',
        width: '90%',
        boxShadow:
          '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(255, 255, 255, 0.3) inset',
        textAlign: 'center',
        color: '#222',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: 'relative',
        animation: 'modalAppear 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
        transformOrigin: 'center',
        willChange: 'transform, opacity',
        cursor: 'default',
      }}
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={closeModal}
        style={{
          position: 'absolute',
          top: '22px',
          right: '22px',
          border: 'none',
          background: 'transparent',
          fontSize: '32px',
          fontWeight: '800',
          color: '#999',
          cursor: 'pointer',
          transition: 'color 0.35s ease, transform 0.3s ease, filter 0.3s ease',
          lineHeight: '1',
          userSelect: 'none',
          filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.12))',
          animation: 'btnFloat 3s ease-in-out infinite',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = '#444';
          e.currentTarget.style.transform = 'scale(1.3)';
          e.currentTarget.style.filter = 'drop-shadow(0 0 8px #444)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = '#999';
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.filter = 'drop-shadow(0 0 3px rgba(0,0,0,0.12))';
        }}
        aria-label="Close modal"
      >
        &times;
      </button>

      <img
        src="/logo.jpeg"
        alt="Virtue Mod Logo"
        style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '32px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          boxShadow:
            '0 0 25px rgba(120, 180, 255, 0.3), 0 10px 25px rgba(0, 0, 0, 0.12)',
          animation: 'logoFlipPulse 4s ease-in-out infinite',
          willChange: 'transform, box-shadow',
          perspective: '800px',
        }}
      />

      <h2
        style={{
          margin: '0 0 20px',
          fontWeight: '900',
          fontSize: '2.4rem',
          color: '#0a0a0a',
          letterSpacing: '0.03em',
          textShadow: '0 2px 5px rgba(0,0,0,0.1)',
          animation: 'fadeUp 0.8s ease forwards',
          opacity: 0,
          transform: 'translateY(15px)',
        }}
      >
        Virtue Mod
      </h2>

      <p
        style={{
          fontSize: '1.25rem',
          lineHeight: '1.75',
          color: '#444',
          marginBottom: '0',
          fontWeight: '600',
          animation: 'fadeUp 1s ease forwards',
          animationDelay: '0.15s',
          opacity: 0,
          transform: 'translateY(15px)',
        }}
      >
        {modalMessage}
      </p>

      <style>
        {`
          @keyframes bgFadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }

          @keyframes modalAppear {
            0% {
              opacity: 0;
              transform: scale(0.7) rotateX(15deg);
            }
            60% {
              opacity: 1;
              transform: scale(1.05) rotateX(-5deg);
            }
            80% {
              transform: scale(0.98) rotateX(2deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotateX(0);
            }
          }

          

          @keyframes btnFloat {
            0%, 100% {
              transform: translateY(0);
              filter: drop-shadow(0 0 3px rgba(0,0,0,0.12));
            }
            50% {
              transform: translateY(-6px);
              filter: drop-shadow(0 0 12px #444);
            }
          }

          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  </div>
)}




</>
);
};

export default Register;