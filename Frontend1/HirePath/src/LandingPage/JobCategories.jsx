// JobCategories.js
import React from "react";
import "./NavBar.css";
const JobCategories = () => {
  return (
    <>
      {/* popular job category section */}
      <section id="job-categories" className="section">
        <center>
          <h2>Popular Job Categories</h2>
        </center>
        <hr />
        <div className="card-container">
          <div className="card" id="card1">
            <h3>Software Development</h3>
            <p>Explore the latest software development jobs.</p>
          </div>

          <div className="card" id="card2">
            <h3>Marketing</h3>
            <p>Find exciting roles in digital and content marketing.</p>
          </div>

          <div className="card" id="card3">
            <h3>Design</h3>
            <p>
              Creative design positions await for graphic and UI/UX designers.
            </p>
          </div>
          <div className="card" id="card4">
            <h3>Finance</h3>
            <p>Discover job opportunities in finance and accounting.</p>
          </div>

          <div className="card" id="card5">
            <h3>Web Developer</h3>
            <p>Creative job opportunity for web developer.</p>
          </div>

          <div className="card" id="card6">
            <h3>HR</h3>
            <p>Here you can find your best recruitment job.</p>
          </div>

          <div className="card" id="card7">
            <h3>Data Analyst</h3>
            <p>Best opportunity for data analyst post.</p>
          </div>

          <div className="card" id="card8">
            <h3>Customer Care</h3>
            <p>100+ vacancies are waiting for you.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobCategories;
