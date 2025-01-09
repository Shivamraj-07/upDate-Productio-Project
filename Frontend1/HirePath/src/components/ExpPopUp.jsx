import React, { useState } from "react";
import imageCompression from "browser-image-compression"; // Import the compression library

const ExpModal = ({
  isOpen,
  onClose,
  onSave,
  company,
  setCompany,
  experience_Year,
  setExperience_Year,
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50  flex items-center  justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96  ">
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="mr-2 bg-gray-300 text-black px-4 py-1 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
        <h2 className="text-xl font-bold">Edit Profile</h2>

        <label className="block mt-4">Company</label>
        <input
          type="text"
          value={company.join(", ")}
          onChange={(e) =>
            setCompany(e.target.value.split(",").map((institut) => institut.trim()))
          }
          className="border rounded px-2 py-1 w-full"
          placeholder="Enter skills separated by commas"
        />
        <label className="block mt-4">experience_Year</label>
        <input
          minLength={1}
          maxLength={2}
          type="text"
          value={experience_Year}
          onChange={(e) => setExperience_Year(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />

      </div>
    </div>
  );
};

export default ExpModal;