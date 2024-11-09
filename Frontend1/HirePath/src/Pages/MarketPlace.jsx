import React, { useState, useEffect } from "react";
import JobCard from "../components/Cards";
import axios from "axios";
import NavBar from "../LandingPage/NavBar";

const MarketPlace = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/MarketPlace`,
          {
            withCredentials: true,
          }
        );
        setJobs(response.data);
        setFilteredJobs(response.data); // initially show all jobs
      } catch (error) {
        setError("Error fetching jobs");
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleApply = async (jobId) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/apply/${jobId}`,
      {},
      { withCredentials: true }
    );
    // Handle the apply action (e.g., make an API call)
    console.log(`Applying for job with ID: ${jobId}`);
  };

  return (
    <>
      <NavBar auth={true} />
      <div className="min-h-screen cursor-pointer bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Job Market Place
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search jobs by skill or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-xl px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-r-lg font-semibold transition-all"
          >
            Search
          </button>
        </form>

        {/* Job Listings */}
        <div className="flex flex-wrap justify-center gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} onApply={handleApply} />
            ))
          ) : (
            <p className="text-gray-500">No jobs found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
