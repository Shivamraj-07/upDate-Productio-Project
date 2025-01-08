import React, { useEffect, useState } from "react";
import NavBar from "../../LandingPage/NavBar";

const JobSection = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false); // Toggle filter visibility
  const [selectedWorkType, setSelectedWorkType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [minSalary, setMinSalary] = useState(0); // Minimum salary slider
  const [jobType, setJobType] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/jobs");
        const data = await response.json();

        console.log("Fetched jobs:", data);

        const currentDate = new Date();
        const filtered = data.filter((job) => new Date(job.lastDate) > currentDate);

        setJobs(filtered);
        setFilteredJobs(filtered);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    let filtered = jobs;
  
    if (searchQuery) {
      filtered = filtered.filter((job) =>
        job.vacancyTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    if (selectedWorkType) {
      filtered = filtered.filter((job) => job.workType === selectedWorkType);
    }
  
    if (selectedLocation) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().trim().includes(selectedLocation.toLowerCase().trim())
      );
    }
  
    if (jobType) {
      filtered = filtered.filter((job) => job.jobType === jobType);
    }
  
    if (minSalary) {
      filtered = filtered.filter((job) => parseFloat(job.salary || 0) >= parseFloat(minSalary));
    }
  
    setFilteredJobs(filtered);
  }, [searchQuery, selectedWorkType, selectedLocation, jobType, minSalary, jobs]);
  
  const handleApply = (googleFormLink) => {
    if (googleFormLink) {
      window.open(googleFormLink, "_blank");
    } else {
      alert("Google Form link not provided by the recruiter.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="p-7 bg-gradient-to-r from-gray-900 to-black min-h-screen">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-red-600">
          Job Listings
        </h2>

        {/* Search Bar with Filter Icon */}
        <div className="flex items-center mb-8">
          <input
            type="text"
            placeholder="Search by job title or company"
            className="flex-grow p-3 text-lg rounded bg-gray-700 text-white mr-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800"
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="fas fa-filter"></i> {/* Font Awesome icon */}
          </button>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-xl text-white font-semibold mb-4">Advanced Filters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Filter by Work Type */}
              <select
                className="p-3 text-lg rounded bg-gray-700 text-white"
                value={selectedWorkType}
                onChange={(e) => setSelectedWorkType(e.target.value)}
              >
                <option value="">Filter by Work Type</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
              </select>

              {/* Filter by Location */}
              <input
                type="text"
                placeholder="Filter by Location"
                className="p-3 text-lg rounded bg-gray-700 text-white"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              />

              {/* Filter by Minimum Salary */}
              <div>
                <label className="text-white block mb-2">Minimum Salary: {minSalary}</label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  className="w-full"
                  value={minSalary}
                  onChange={(e) => setMinSalary(e.target.value)}
                />
              </div>

              {/* Filter by Job Type */}
              <select
                className="p-3 text-lg rounded bg-gray-700 text-white"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="">Filter by Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          </div>
        )}

        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-6 border-2 border-red-600"
              >
                <h3 className="text-2xl font-semibold text-red-700 mb-3">{job.vacancyTitle}</h3>
                <p className="text-gray-800 mb-2">
                  <strong>Company:</strong> {job.companyName}
                </p>
                <p className="text-gray-800 mb-2">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-gray-800 mb-2">
                  <strong>Skills:</strong> {job.skillRequired}
                </p>
                <p className="text-gray-800 mb-2">
                  <strong>Salary:</strong> {job.salary ? job.salary : "Not disclosed"}
                </p>
                <p className="text-gray-800 mb-2">
                  <strong>Last Date to Apply:</strong> {new Date(job.lastDate).toLocaleDateString()}
                </p>
                <p className="text-gray-800 mb-2">
                  <strong>Work Mode:</strong> {job.workType}
                </p>
                <p className="text-gray-800 mb-2">
                  <strong>Job Type:</strong> {job.jobType}
                </p>
                <p className="text-gray-800 mb-4">
                  <strong>Experience Level:</strong> {job.experienceLevel}
                </p>
                <button
                  className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 w-full transition-colors duration-300"
                  onClick={() => handleApply(job.googleFormLink)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-white mt-16">No jobs available at the moment.</p>
        )}
      </div>
    </>
  );
};

export default JobSection;
