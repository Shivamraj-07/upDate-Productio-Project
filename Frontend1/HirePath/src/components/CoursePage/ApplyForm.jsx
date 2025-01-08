import React, { useState } from "react";
import axios from "axios";

const ApplyForm = ({ courseName, closeForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    const amount = 4444; // Price of the course

    try {
      setIsLoading(true);
      const response = await axios.post( "http://localhost:5000/payment", {
        name,
        mobileNumber: mobile,
        amount,
      });

      const redirectUrl = response.data; // URL from the backend
      if (redirectUrl) {
        window.location.href = redirectUrl; // Redirect to payment gateway
      } else {
        alert("Failed to initiate payment.");
      }
    } catch (error) {
      console.error("Error during payment initiation:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !mobile) {
      alert("Please fill in all fields.");
      return;
    }

    // Confirm and trigger the payment process
    const confirmPayment = window.confirm(`Proceed to pay ₹4444 for ${courseName}?`);
    if (confirmPayment) {
      handlePayment();
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <button
          onClick={closeForm}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Apply for {courseName}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-between items-center">
            <p className="text-lg font-semibold">
              Price: <span className="line-through text-red-500">₹8888</span> ₹4444
            </p>
            <p className="text-sm text-gray-600">
              (3 months course + 3-month internship)
            </p>
          </div>

          <button
            type="submit"
            className={`bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 w-full transition-colors duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Apply & Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
