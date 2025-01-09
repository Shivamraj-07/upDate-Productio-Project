import React, { useState } from "react";
import imageCompression from "browser-image-compression"; // Import the compression library

const EduModal = ({
  isOpen,
  onClose,
  onSave,
  institution,
  setInstitution,
  degree,
  setDegree,
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

        <label className="block mt-4">Institution</label>
        <input
          type="text"
          value={institution.join(", ")}
          onChange={(e) =>
            setInstitution(e.target.value.split(",").map((institut) => institut.trim()))
          }
          className="border rounded px-2 py-1 w-full"
          placeholder="Enter skills separated by commas"
        />
        <label className="block mt-4">Degree</label>
        <input
          type="text"
          value={degree.join(", ")}
          onChange={(e) =>
            setDegree(e.target.value.split(",").map((deg) => deg.trim()))
          }
          className="border rounded px-2 py-1 w-full"
          placeholder="Enter skills separated by commas"
        />

      </div>
    </div>
  );
};

export default EduModal;