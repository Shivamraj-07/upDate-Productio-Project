import React, { useState, useEffect } from "react";
import { ShimmerCategoryItems, ShimmerTitle } from "shimmer-effects-react";
import JobCard from "../components/Cards";
import axios from "axios";
import NavBar from "../LandingPage/NavBar";

const MarketPlace = ({}) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(1);
  const [nojob, setNojob] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/MarketPlace?limit=10&page=${next}`,
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
  }, [next, prev]);

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtered.length > 0) setFilteredJobs(filtered);
    else {
      setNojob(true);
      setTimeout(() => {
        setNojob(false);
      }, 3000);
    }
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

  return !filteredJobs.length ? (
    <>
      <NavBar />
      <div className="pt-20">
        <ShimmerTitle mode="light" line={4} gap={3} />
        <ShimmerCategoryItems mode="light" />
        <ShimmerCategoryItems mode="light" imageRounded={50} />
        <ShimmerCategoryItems mode="light" />
        <ShimmerCategoryItems mode="light" imageRounded={50} />{" "}
        <ShimmerCategoryItems mode="light" />
        <ShimmerCategoryItems mode="light" imageRounded={50} />
      </div>
    </>
  ) : (
    <>
      {<NavBar auth={true} />}
      <div className="min-h-screen cursor-pointer bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Job Market Place
        </h1>

        {/* Search Bar */}

        <div className="flex justify-center items-center mt-12">
          <form
            onSubmit={handleSearch}
            className="relative w-full shadow-inner-custom max-w-2xl p-3 bg-white rounded-full flex items-center"
          >
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full flex-1 pl-6 pr-12 py-2 text-gray-700 font-bold placeholder-red-400 rounded-full outline-none bg-white"
            />
            <button
              type="submit"
              className="absolute  right-4 bg-red-600 p-2 rounded-full text-white hover:bg-red-700 transition"
            >
              <img src="search.svg" alt="search" className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Job Listings */}
        <div className="flex flex-wrap justify-center gap-4">
          {nojob && (
            <>
              <h3 className="text-red-500 font-bold">there is so such job</h3>
            </>
          )}
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} onApply={handleApply} />
            ))
          ) : (
            <p className="text-gray-500">No jobs found</p>
          )}
        </div>
        <div>
          <button onClick={() => setNext((prev) => prev < 2 && prev + 1)}>
            next
          </button>
          <button onClick={() => setNext((pre) => pre > 0 && pre - 1)}>
            prev
          </button>
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
