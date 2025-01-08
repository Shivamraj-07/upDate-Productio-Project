import React, { useState, useEffect } from "react";


import {
  FaBuilding,
  FaUserTie,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaWrench,
  FaLaptop,
  FaClock,
  FaGraduationCap,
  FaStar,
  FaDollarSign,
  FaLink,
} from "react-icons/fa";

const RecruiterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    vacancyTitle: "",
    location: "",
    lastDate: "",
    totalCandidates: "",
    skillRequired: "",
    workType: "",
    jobType: "",
    experienceLevel: "",
    experienceRequirement: "",
    googleFormLink: "", // Added state for Google Form Link
    salary: "", // Added state for Salary
    
  });
  const [isFormOpen, setIsFormOpen] = useState(true); // State to control form visibility

  // Lock background scrolling when the modal is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      document.body.style.overflow = "auto"; // Unlock scroll when modal closes
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is always unlocked
    };
  }, [isFormOpen]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        alert("Job registered successfully!");
      } else {
        alert("Failed to register job!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred!");
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      companyName: "",
      vacancyTitle: "",
      location: "",
      lastDate: "",
      totalCandidates: "",
      skillRequired: "",
      workType: "",
      jobType: "",
      experienceLevel: "",
      experienceRequirement: "",
      googleFormLink: "", // Reset Google Form Link
      salary: "", // Reset Salary
    });
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the form and show the landing page
  };

  return (
    <>
      {isFormOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md"
          onClick={(e) => e.stopPropagation()} // Prevent closing the modal on background click
        >
          <div className="bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-xl w-full max-w-3xl relative">
            {/* Close Button */}
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 text-3xl text-white font-bold"
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                background: "rgba(0, 0, 0, 0.6)", // Optional background for visibility
                color: "white", // Ensure the button is always visible
                cursor: "pointer",
              }}
            >
              &times; {/* Close icon (X) */}
            </button>

            <div className="bg-white p-8 rounded-lg shadow-md">
              {isSubmitted ? (
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                    🎉 Job Registered Successfully!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Your job vacancy has been successfully submitted.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg hover:scale-105 transform transition-all"
                  >
                    Register Another Job
                  </button>
                </div>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    <span className="text-blue-600">Recruiter</span> Registration
                  </h1>
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-6 max-h-[65vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 px-4"
                  >
                    {[{
                      id: "companyName",
                      label: "Company Name",
                      icon: <FaBuilding />
                    }, {
                      id: "vacancyTitle",
                      label: "Job Title",
                      icon: <FaUserTie />
                    }, {
                      id: "totalCandidates",
                      label: "Total No. of Candidates",
                      icon: <FaUsers />
                    }, {
                      id: "skillRequired",
                      label: "Required Skills",
                      icon: <FaWrench />
                    }, {
                      id: "location",
                      label: "Job Location",
                      icon: <FaMapMarkerAlt />
                    }, {
                      id: "lastDate",
                      label: "Last Date to Apply",
                      icon: <FaCalendarAlt />,
                      type: "date"
                    }, {
                      id: "googleFormLink",
                      label: "Google Form Link",
                      icon: <FaLink />
                    }, {
                      id: "salary",
                      label: "Salary (per annum)",
                      icon: <FaDollarSign />,
                      type: "number"
                    }].map(({ id, label, icon, type = "text" }) => (
                      <div key={id} className="flex items-center gap-4">
                        <div className="text-2xl text-blue-500">{icon}</div>
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor={id}
                            className="text-sm font-semibold text-gray-700"
                          >
                            {label}
                          </label>
                          <input
                            id={id}
                            type={type}
                            value={formData[id]}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                          />
                        </div>
                      </div>
                    ))}

                    {/* Dropdown for Job Type */}
                    <div className="flex items-center gap-4">
                      <div className="text-2xl text-blue-500">
                        <FaClock />
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="jobType"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Job Type
                        </label>
                        <select
                          id="jobType"
                          value={formData.jobType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                          required
                        >
                          <option value="">Select Job Type</option>
                          <option value="Part-Time">Part-Time</option>
                          <option value="Full-Time">Full-Time</option>
                        </select>
                      </div>
                    </div>

                    {/* Dropdown for Work Type */}
                    <div className="flex items-center gap-4">
                      <div className="text-2xl text-blue-500">
                        <FaLaptop />
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="workType"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Work Type
                        </label>
                        <select
                          id="workType"
                          value={formData.workType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                          required
                        >
                          <option value="">Select Work Type</option>
                          <option value="Remote">Remote</option>
                          <option value="Hybrid">Hybrid</option>
                          <option value="Onsite">Onsite</option>
                        </select>
                      </div>
                    </div>

                    {/* Dropdown for Experience Level */}
                    <div className="flex items-center gap-4">
                      <div className="text-2xl text-blue-500">
                        <FaGraduationCap />
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="experienceLevel"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Experience Level
                        </label>
                        <select
                          id="experienceLevel"
                          value={formData.experienceLevel}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                          required
                        >
                          <option value="">Select Experience Level</option>
                          <option value="Fresher">Fresher</option>
                          <option value="Experienced">Experienced</option>
                          <option value="Both">Both</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 text-white font-bold bg-gradient-to-r from-purple-500 to-blue-600 rounded-full shadow-lg hover:scale-105 transform transition-all"
                    >
                      🚀 Register Job
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecruiterForm;
