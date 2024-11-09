

import React, { useState } from 'react';
import NavBar from '../LandingPage/NavBar';
import Resumeform from './Resumeform';
import './Resume.css'; // Import the CSS file if you use external CSS

function Resume() {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={`relative w-full  h-screen bg-blue-100 ${showModal ? 'overflow-hidden' : ''}`}>
      <NavBar />

      <div className="flex flex-col items-center justify-center h-full space-y-6 p-4  ">
        {/* Responsive heading text */}
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 text-center px-4">
          "Create Your Resume that opens <br className="hidden sm:block"/> doors and showcases your true potential."
        </h1>

        {/* Responsive Button with shake and jump animation and moving shadow */}
        <button 
          onClick={toggleModal} 
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition-all duration-200 ease-in-out transform hover:scale-105 animate-shake-jump"
        >
          Create Your Resume
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay with blur effect */}
          <div
            className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"
            onClick={toggleModal} // Close modal when clicking outside
          ></div>

          {/* Popup content */}
          <div className="relative z-10 max-w-full sm:max-w-3xl w-full p-4 sm:p-0">
            <Resumeform />
          </div>
        </div>
      )}
    </div>
  );
}

export default Resume;
