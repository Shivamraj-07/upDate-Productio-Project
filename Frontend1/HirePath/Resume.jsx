import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Resume.css"; // Import the CSS file for styling

function Resume() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch profile data on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/Profile`, {
          withCredentials: true,
        });
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  // Handle payment button click
  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/payment",
        {
          name,
          email,
          amount: 1111,
        },
        { withCredentials: true }
      );
      if (response.data) {
        window.location.href = response.data; // Redirect to payment gateway
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  return (
    <div className="relative w-full h-screen bg-blue-100 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-6 p-4 bg-blue-100 rounded-lg shadow-lg max-w-lg w-full">
        {/* Responsive heading text */}
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 text-center px-4">
          "Create Your Resume that opens <br className="hidden sm:block" /> doors and showcases your true potential."
        </h1>
        <h3 className="animated-text">It will Charge &#x20B9;1111 only</h3>

        {/* Responsive Button with shake and jump animation */}
        <button
          onClick={handlePayment}
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition-all duration-200 ease-in-out transform hover:scale-105 animate-shake-jump"
        >
          Create Your Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;
