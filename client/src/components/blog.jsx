import React from "react";

const blogPosts = [
  {
    title: "The Rise of AI in Modern Businesses",
    author: "John Smith",
    date: "August 14, 2025",
    category: "Artificial Intelligence",
    snippet:
      "Artificial Intelligence is transforming business strategies, increasing efficiency, and driving innovation across industries...",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTNf5Gr8jK3C4bKVRqhTx790EsPpPM6mqaBOczQq_zx43ufQV7VGJPJo-P5kRUfvU_Z0E&usqp=CAU",
    link: "https://www.artificial-intelligence.blog/",
  },
  {
    title: "Next.js: Building Modern Web Applications",
    author: "Emily Johnson",
    date: "August 12, 2025",
    category: "Web Development",
    snippet:
      "Learn how Next.js simplifies building fast, scalable, and SEO-friendly web applications using React framework...",
    photo:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&h=600&w=800",
    link: "https://careerfoundry.com/en/blog/web-development/",
  },
  {
    title: "Backend Engineering Best Practices",
    author: "Michael Lee",
    date: "August 10, 2025",
    category: "Backend Development",
    snippet:
      "Understand the key principles of backend engineering, including API design, database management, and server architecture...",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9qlyZAguSX-8mj8fdT98nD9_DMifxMy75Q&s",
    link: "https://www.geeksforgeeks.org/blogs/backend-development/",
  },
  {
    title: "UI/UX Design Trends in 2025",
    author: "Sophia Williams",
    date: "August 8, 2025",
    category: "Design",
    snippet:
      "Stay ahead with the latest UI/UX design trends to create visually stunning and user-friendly digital experiences...",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_E6YgWc95x9yJwE3ScaXCbgrjac1Q-6New&s",
    link: "https://www.learnui.design/blog/",
  },
  {
    title: "QA Automation: Ensuring Product Quality",
    author: "David Brown",
    date: "August 6, 2025",
    category: "Quality Assurance",
    snippet:
      "Explore how QA automation can streamline testing processes, improve product quality, and accelerate release cycles...",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtnHeQwr_SZHnD0L2daOsC43-S67uLhPRBw&s",
    link: "https://sqagroup.com/blog/",
  },
  {
    title: "Mentorship & Career Growth in Tech",
    author: "Laura Davis",
    date: "August 4, 2025",
    category: "Career Growth",
    snippet:
      "Mentorship plays a vital role in professional growth, providing guidance, support, and opportunities in technology careers...",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOt8yVPy6GGZ4tjCXHpImPPqpNoEwJGeE2Q&s",
    link: "https://technology.online.city.ac.uk/blogs/topic/computer-science/",
  },
];

const Blog = () => {
  return (
    <div style={styles.page} id="blog">
      <h1 className="blog-heading">Our Professional Blog</h1>
      <div style={styles.grid}>
        {blogPosts.map(({ title, author, date, snippet, photo, link, category }) => (
          <div key={title} className="blog-card">
            <div className="image-wrapper">
              <img src={photo} alt={title} className="blog-image" />
            </div>
            <div className="blog-content">
              <span className="category">{category}</span>
              <h2 className="title">{title}</h2>
              <p className="author">{author} - {date}</p>
              <p className="snippet">{snippet}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className="read-link">Read More</a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

        .blog-heading {
          font-size: 3rem;
          margin-bottom: 50px;
          font-weight: 800;
          text-align: center;
          color: #fff;
        }

        @media (max-width: 768px) { .blog-heading { font-size: 2.4rem; } }
        @media (max-width: 480px) { .blog-heading { font-size: 2rem; } }

        .blog-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.5);
        }

        .image-wrapper { width: 100%; height: 220px; overflow: hidden; }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .blog-image { transform: scale(1.05); }

        .blog-content {
          padding: 20px 18px 28px 18px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .category {
          font-size: 0.85rem;
          color: #5c4dff;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }

        .author {
          font-size: 1rem;
          color: #bbb;
          margin-bottom: 12px;
        }

        .snippet {
          font-size: 1rem;
          color: #ddd;
          flex-grow: 1;
          margin-bottom: 18px;
        }

        .read-link {
          font-size: 1rem;
          color: #8338ec;
          font-weight: 600;
          text-decoration: none;
          padding: 8px 18px;
          border-radius: 24px;
          background: rgba(131, 56, 236, 0.15);
          text-align: center;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .read-link:hover {
          background: #5c4dff;
          color: #fff;
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 40,
    width: "100%",
    maxWidth: 1200,
  },
};

export default Blog;
