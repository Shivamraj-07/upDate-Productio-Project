import React, { useState } from "react";
import "./RecruiterForm.css"; // Assuming your CSS file is named "style.css"

const RecruiterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="form-container">
      {isSubmitted ? (
        <>
          <h2 className="form-title">Job Registered Successfully!</h2>
          <p>Your job vacancy has been successfully submitted.</p>
          <button onClick={() => setIsSubmitted(false)} className="submit-btn">
            Register Another Job
          </button>
        </>
      ) : (
        <>
          <h1 className="form-title">Recruiter Registration</h1>
          <form id="recruiterForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="companyName">Company Name:</label>
              <input type="text" id="companyName" required />
            </div>
            <div className="input-group">
              <label htmlFor="vacancyTitle">Job Title:</label>
              <input type="text" id="vacancyTitle" required />
            </div>
            <div className="input-group">
              <label htmlFor="skillRequired">Skill Required:</label>
              <input type="text" id="skillRequired" required />
            </div>
            <div className="input-group">
              <label htmlFor="vacancyNumber">Vacancy Number:</label>
              <input type="number" id="vacancyNumber" required />
            </div>
            <div className="input-group">
              <label htmlFor="experienceLevel">Experience Level:</label>
              <select id="experienceLevel" required>
                <option value="fresher">Fresher</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="ctcPackage">CTC Package (LPA):</label>
              <input type="number" step="0.1" id="ctcPackage" required />
            </div>
            <div className="input-group">
              <label htmlFor="location">Job Location:</label>
              <input type="text" id="location" required />
            </div>
            <div className="input-group">
              <label htmlFor="mode">Mode:</label>
              <input type="text" id="mode" required />
            </div>
            <div className="input-group">
              <label htmlFor="perks">Perks:</label>
              <input type="text" id="perks" required />
            </div>
            <div className="input-group">
              <label htmlFor="lastDate">Last Date to Apply:</label>
              <input type="date" id="lastDate" required />
            </div>
            <div className="input-group">
              <label htmlFor="description">Job Description:</label>
              <textarea id="description" rows="3" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Register Job
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default RecruiterForm;
