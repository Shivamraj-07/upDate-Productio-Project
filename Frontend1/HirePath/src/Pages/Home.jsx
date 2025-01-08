import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Assuming you have a CSS file for styles
import NavBar from "../LandingPage/NavBar";


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
const Home = () => {
  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for jobs...");
  };

  return (
    <>
      {/* Starting of nav bar */}
      <NavBar />
      {/* Nav bar ended */}

      {/* Coding for main element */}
      <main>
        <div className="container-1">
          <img
            className="img_student"
            src="student.png"
            alt="Student illustration"
          />
          <h1 className="main">
            Welcome to HirePath,
            <p>Your next career move starts here!</p>
          </h1>

          <ul type="square">
            <li>
              <strong>Mission and vision:</strong> We aim to help people find
              meaningful work and connect employers with the right talent.
            </li>
            <li>
              <strong>Company Values:</strong> Transparency, integrity, and
              dedication to job seekers and employers alike.
            </li>
            <li>
              <strong>Join Us on Our Journey:</strong> We’re here to support
              you. Join our community, explore possibilities, and let us help
              you find the path to a fulfilling career.
            </li>
          </ul>
          <center>
            <Link to="/learn-more">
              <input type="button" className="btn" value="Learn more" />
            </Link>
          </center>
        </div>

        <div className="search-container">
          <div className="search-bar">
            <label>What do you want to do?</label>
            <input type="text" placeholder="🔍 Search by role" />
          </div>
          <div className="search-bar">
            <label>Where do you want to do it?</label>
            <input type="text" placeholder="🔍 Search by location" />
          </div>
          <button className="find-job-button" onClick={handleSearch}>
            Find Job
          </button>
        </div>

        <div className="fall_img">
          <h1>Trending Job Roles</h1>
          {/* Job role elements */}
          {[
            {
              title: "Technician",
              imgSrc:
                "https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=1462&auto=format&fit=crop",
              experience: "30 posts",
            },
            {
              title: "Machine Operator",
              imgSrc:
                "https://images.unsplash.com/photo-1724710377955-09c7ffdc8294?q=80&w=930&auto=format&fit=crop",
              experience: "Close: 4th Oct 2024",
            },
            // Add more roles as needed...
          ].map((job, index) => (
            <div className="elem" key={index}>
              <div className="left">
                <h3>{job.title}</h3>
                <img src={job.imgSrc} alt={job.title} />
              </div>
              <div className="right">
                <h2>{job.experience}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="marquee">
          <h1>Update Hire Path 2024</h1>
          <h1>Update Hire Path 2024</h1>
          {/* Add more updates as needed */}
        </div>

        {/* Signs and Symptoms */}
        <div
          className="container-4"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <h2 style={{ width: "100%", textAlign: "center" }}>
            <u>Signs & Symptoms Of Career Issues</u>
          </h2>
          {[
            {
              imgSrc: "box-7.jpg",
              alt: "Cluelessness about job prospects",
              description: "Cluelessness about job prospects",
            },
            // Add more symptoms as needed...
          ].map((issue, index) => (
            <div
              className="column"
              key={index}
              style={{
                flex: "1 0 30%",
                margin: "10px",
                boxSizing: "border-box",
              }}
            >
              <img
                className="box-1"
                src={issue.imgSrc}
                style={{ width: "100%", height: "200px" }}
                alt={issue.alt}
              />
              <p style={{ textAlign: "center" }}>{issue.description}</p>
            </div>
          ))}
        </div>
      </main>

     {/* Footer section */}
     <footer
        style={{
          backgroundColor: "#003366",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div className="copy" style={{ marginBottom: "20px" }}>
          &copy; 2024 Developer
        </div>
        <div
          className="bottom-links"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="links" style={{ margin: "20px", textAlign: "left" }}>
            <span
              style={{
                display: "block",
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              More Info
            </span>
            <a
              href="/"
              style={{
                color: "#a1a1a1",
                textDecoration: "none",
                display: "block",
                margin: "5px 0",
              }}
            >
              Home
            </a>
            <a
              href="/about"
              style={{
                color: "#a1a1a1",
                textDecoration: "none",
                display: "block",
                margin: "5px 0",
              }}
            >
              About
            </a>
            <a
              href="/contact"
              style={{
                color: "#a1a1a1",
                textDecoration: "none",
                display: "block",
                margin: "5px 0",
              }}
            >
              Contact
            </a>
          </div>
          <div className="social-links">
            <span className="social-links-title">Social Links</span>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/updateedu/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/update_edu?t=kOObnmQ39MvdZXlH8Og_Ng&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/update_edu/profilecard/?igsh=bDF3eDUxOG1wbHZ2"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;