import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import * as Components from "./Components";

const Register = () => {
  const [signIn, toggle] = React.useState(true);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Montserrat", sans-serif;
        }

        .register-wrapper {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .register-content {
          position: relative;
          z-index: 1;
        }

        .tsparticles-canvas {
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
          z-index: 0;
        }
      `}</style>

      <div className="register-wrapper">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: false,
            background: {
              color: { value: "#f6f5f7" }
            },
            particles: {
              number: {
                value: 80,
                density: { enable: true, value_area: 800 }
              },
              color: { value: "#000000" },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
                random: true
              },
              size: {
                value: 3,
                random: true
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                outModes: { default: "out" }
              }
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" }
              },
              modes: {
                repulse: { distance: 100 }
              }
            }
          }}
        />

        <div className="register-content">
          <Components.Container>
            <Components.SignUpContainer signingIn={signIn}>
              <Components.Form>
                <Components.Title>Create Account</Components.Title>
                <Components.Input type="text" placeholder="Name" />
                <Components.Input type="email" placeholder="Email" />
                <Components.Input type="password" placeholder="Password" />
                <Components.Button>Sign Up</Components.Button>
              </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signingIn={signIn}>
              <Components.Form>
                <Components.Title>Sign in</Components.Title>
                <Components.Input type="email" placeholder="Email" />
                <Components.Input type="password" placeholder="Password" />
                <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                <Components.Button>Sign In</Components.Button>
              </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signingIn={signIn}>
              <Components.Overlay signingIn={signIn}>
                <Components.LeftOverlayPanel signingIn={signIn}>
                  <Components.Title>Welcome Back!</Components.Title>
                  <Components.Paragraph>
                    To keep connected with us please login with your personal info
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>
                    Sign In
                  </Components.GhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel signingIn={signIn}>
                  <Components.Title>Hello, Friend!</Components.Title>
                  <Components.Paragraph>
                    Enter your personal details and start journey with us
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(false)}>
                    Sign Up
                  </Components.GhostButton>
                </Components.RightOverlayPanel>
              </Components.Overlay>
            </Components.OverlayContainer>
          </Components.Container>
        </div>
      </div>
    </>
  );
};

export default Register;
