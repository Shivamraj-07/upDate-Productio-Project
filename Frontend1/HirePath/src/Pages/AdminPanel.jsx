import React, { useEffect, useState } from "react";
import AdminNavBar from "../components/Admin/AdminNavBar";

const AdminPanel = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleDelete = async (jobId) => {
    console.log("Deleting job with ID:", jobId); // Log the jobId to the console
    try {
      const response = await fetch(`http://localhost:5000/api/jobs/${jobId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Job deleted successfully.');
        setJobs(jobs.filter((job) => job._id !== jobId)); // Remove job from local state
      } else {
        alert('Failed to delete job.');
      }
    } catch (error) {
      console.error('Error deleting job:', error);
      alert('An error occurred while deleting the job.');
    }
  };
  
  return (
    <> 
      <AdminNavBar />
      <div className="p-7 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Admin Panel</h2>
        <div>
          {jobs.map((job) => (
            <div key={job._id} className="border p-4 mb-4 rounded">
              <h3 className="text-xl font-bold">{job.vacancyTitle}</h3>
              <p>Company: {job.companyName}</p>
              <p>Location: {job.location}</p>
              <p>Skills: {job.skillRequired}</p>
              <p>Salary: {job.salary || "Not disclosed"}</p>
              <p>Email: {job.email}</p>
              <button
                onClick={() => handleDelete(job._id)}
                className="bg-red-600 text-white py-1 px-3 rounded mr-3"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;

