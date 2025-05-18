import React from "react";

const teamMembers = [
  {
    name: "Taha Bin Arshad",
    role: "Project Manager",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "https://linkedin.com/in/taha",
  },
  {
    name: "Shayan Ahmed",
    role: "Lead Developer",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    linkedin: "https://linkedin.com/in/shayanahmed1",
  },
  {
    name: "Adnan Ali",
    role: "Backend Engineer",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    linkedin: "https://linkedin.com/in/shayanahmed2",
  },
  {
    name: "Muhammad Ahmed",
    role: "QA Engineer",
    photo: "https://randomuser.me/api/portraits/men/38.jpg",
    linkedin: "https://linkedin.com/in/markspencer",
  },
  {
    name: "Muneera Ahmed",
    role: "UI/UX Designer",
    photo: "https://randomuser.me/api/portraits/women/30.jpg",
    linkedin: "https://linkedin.com/in/ninapatel",
  },
  {
    name: "Alex Johnson",
    role: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/men/40.jpg",
    linkedin: "https://linkedin.com/in/alexjohnson",
  },
];

const Team = () => {
  return (
    <div style={styles.page} id="team">
      <h1 style={styles.heading}>Meet Our Team</h1>
      <div style={styles.grid}>
        {teamMembers.map(({ name, role, photo, linkedin }) => (
          <div key={name} className="team-card">
            <div className="avatar-wrapper">
              <img src={photo} alt={name} className="avatar" />
            </div>
            <h2 className="name">{name}</h2>
            <p className="role">{role}</p>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

        .team-card {
          background: rgba(255, 255, 255, 0.07);
          border-radius: 24px;
          padding: 28px 24px 36px;
          box-shadow:
            0 8px 32px 0 rgba(131, 56, 236, 0.4),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #eee;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
          user-select: none;
          will-change: transform;
        }

        .team-card:hover {
          transform: translateY(-12px) scale(1.07);
          box-shadow:
            0 12px 40px 0 rgba(131, 56, 236, 0.7),
            inset 0 0 0 1.5px rgba(255, 255, 255, 0.15);
        }

        .avatar-wrapper {
          background: linear-gradient(135deg, #5c4dff, #8338ec);
          padding: 4px;
          border-radius: 50%;
          margin-bottom: 20px;
          box-shadow:
            0 4px 14px rgba(131, 56, 236, 0.6);
          transition: box-shadow 0.35s ease;
          width: 128px;
          height: 128px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .team-card:hover .avatar-wrapper {
          box-shadow:
            0 8px 30px rgba(92, 77, 255, 0.9);
        }

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }

        .name {
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0 0 6px 0;
          color: #e0e0e0;
          letter-spacing: 0.03em;
        }

        .role {
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0 0 18px 0;
          color: #bbb;
        }

        .linkedin-link {
          font-size: 1rem;
          color: #8338ec;
          font-weight: 600;
          text-decoration: none;
          padding: 8px 18px;
          border-radius: 24px;
          background: rgba(131, 56, 236, 0.15);
          box-shadow: 0 4px 15px rgba(131, 56, 236, 0.35);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .linkedin-link:hover {
          background: #5c4dff;
          box-shadow: 0 8px 30px rgba(92, 77, 255, 0.8);
          color: #fff;
        }

        .linkedin-link:focus-visible {
          outline: 2px solid #5c4dff;
          outline-offset: 3px;
        }
      `}</style>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    padding: "80px 20px",
    fontFamily: "'Inter', sans-serif",
    color: "#eee",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: 50,
    fontWeight: "800",
    letterSpacing: "0.05em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 40,
    width: "100%",
    maxWidth: 1100,
  },
};

export default Team;
