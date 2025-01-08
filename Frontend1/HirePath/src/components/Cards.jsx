// JobCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = React.memo(({ job, onApply }) => {
  const { title, description, experience, salary, lastDate, _id } = job;
  const navigate = useNavigate();

  const handleApply = () => {
    onApply(_id);
  };

  const handleViewDetails = () => {
    navigate(`/job/${_id}`);
  };

  return (
    <div
      onClick={handleViewDetails}
      className="w-full cursor-pointer flex gap-y-3 flex-col sm:flex-row items-start sm:items-center justify-between bg-white text-zinc-950 border-b border-gray-300 p-4 hover:bg-gray-50 transition-colors duration-200"
    >
      <div className="flex-grow space-y-1">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex flex-wrap sm:flex-nowrap space-y-1 sm:space-y-0 sm:space-x-4 text-sm">
          <span>
            <strong>Experience:</strong> {experience} years
          </span>
          <span>
            <strong>Salary:</strong> ${salary}/year
          </span>
          <span>
            <strong>Last Date:</strong>{" "}
            {new Date(lastDate).toLocaleDateString()}
          </span>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click from triggering
          handleViewDetails();
        }}
        className="w-full sm:w-auto mt-3 sm:mt-0 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Apply
      </button>
    </div>
  );
});

export default JobCard;
