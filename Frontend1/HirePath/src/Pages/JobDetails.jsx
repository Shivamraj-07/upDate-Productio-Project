// JobDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../LandingPage/NavBar";

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/job/${jobId}`,
          { withCredentials: true }
        );
        setJob(response.data);
        console.log(response.data);
      } catch (error) {
        setError("Error fetching job details");
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!job) {
    return (
      <>
        <NavBar />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen py-9 bg-gray-100">
        <JobDetailscard job={job} />
      </div>
    </>
  );
};

export default JobDetails;
// JobDescription.jsx

// JobTitle Component
const JobTitle = ({ title, companyName }) => (
  <div className="text-center mt-5 md:mt-10">
    <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
    <span className="text-gray-500">{companyName}</span>
  </div>
);

// Column Component for repetitive information
const Column = ({ title, description }) => (
  <div className="flex flex-col text-center">
    <h1 className="font-semibold text-sm">{title}</h1>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

// Tags Component for Skills and Perks
const Tags = ({ title, items }) => (
  <div className="mt-5 md:mt-10">
    <h1 className="font-semibold mb-2 md:mb-3">{title}</h1>
    <div className="flex flex-wrap gap-2 md:gap-3">
      {items.map((item, index) => (
        <span
          key={index}
          className="border border-gray-400 rounded-full px-3 py-1 text-sm text-red-600"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

// JobDescription Component
const JobDetailscard = ({ job }) => {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen bg-gray-100 py-5 md:py-10">
        <div className="w-full max-w-4xl bg-white rounded-2xl p-6 md:p-10 shadow-lg relative">
          <div className="text-red-600 text-lg md:text-xl font-bold bg-white px-3 py-1 rounded-full absolute -top-4 left-5 md:left-10">
            Job Description
          </div>

          {/* Job Title and Company */}
          <div className="text-center mt-10 mb-8">
            <h1 className="text-3xl font-bold">{job.title || "Loading..."}</h1>
            <span className="text-xl text-red-500 font-semibold block">
              {job.CompanyName || "Loading..."}
            </span>
          </div>

          {/* Job Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            <Column title="Mode" description={job.Mode || "Loading..."} />
            <Column title="Type" description={job.Type || "Loading..."} />
            <Column
              title="No. of openings"
              description={job.NumberOfOpenings || "Loading..."}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            <Column
              title="Experience"
              description={job.experience || "Loading..."}
            />
            <Column title="Salary" description={job.salary || "Loading..."} />
            <Column
              title="Last date"
              description={job.lastDate || "Loading..."}
            />
          </div>

          {/* About the Job Section */}
          <div className="mt-8">
            <h1 className="font-semibold text-lg mb-3">About The Job</h1>
            <p className="text-gray-500 whitespace-pre-line">
              {job.description || "Loading..."}
            </p>
          </div>

          {/* Skills and Perks */}
          <Tags
            title="Skills Required"
            items={job.SkillRequired || ["Loading..."]}
          />
          <div className="mt-8">
            <h1 className="font-semibold text-lg mb-3">Perks</h1>
            <p className="text-gray-500 whitespace-pre-line">
              {job.perks || "Loading..."}
            </p>
          </div>

          {/* Apply Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() =>
                job?.googleForm && (window.location.href = job.googleForm)
              }
              disabled={!job?.googleForm}
              className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-all disabled:opacity-50"
            >
              Apply Now
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
