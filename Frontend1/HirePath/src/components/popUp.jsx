import React, { useState } from "react";
import imageCompression from "browser-image-compression"; // Import the compression library

const Modal = ({
  isOpen,
  onClose,
  onSave,
  name,
  setName,
  skills,
  setSkills,
  setProfileImage,
  setBackgroundImage,
}) => {
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [backgroundImageFile, setBackgroundImageFile] = useState(null);

  if (!isOpen) return null;

  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 1, // Set max size in MB
          maxWidthOrHeight: 500, // Set max width/height
          useWebWorker: true, // Use web worker for performance
        };
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfileImageFile(reader.result);
          setProfileImage(reader.result); // Update the profile image in the parent component
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error compressing profile image:", error);
      }
    }
  };

  const handleBackgroundImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 1, // Set max size in MB
          maxWidthOrHeight: 500, // Set max width/height
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onloadend = () => {
          setBackgroundImageFile(reader.result);
          setBackgroundImage(reader.result); // Update the background image in the parent component
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error compressing background image:", error);
      }
    }
  };

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

        <label className="block mt-4">Name</label>
        <input
          minLength={3}
          maxLength={15}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />

        <label className="block mt-4">Skills</label>
        <input
          type="text"
          value={skills.join(", ")}
          onChange={(e) =>
            setSkills(e.target.value.split(",").map((skill) => skill.trim()))
          }
          className="border rounded px-2 py-1 w-full"
          placeholder="Enter skills separated by commas"
        />

        <label className="block mt-4">Profile Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfileImageChange}
          className="border rounded px-2 py-1 w-full"
        />
        {profileImageFile && (
          <img
            src={profileImageFile}
            alt="Profile Preview"
            className="mt-2 w-24 h-24 object-cover"
          />
        )}

        <label className="block mt-4">Background Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleBackgroundImageChange}
          className="border rounded px-2 py-1 w-full"
        />
        {backgroundImageFile && (
          <img
            src={backgroundImageFile}
            alt="Background Preview"
            className="mt-2 w-full h-24 object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
