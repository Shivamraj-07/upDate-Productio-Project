import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/payment", {
        name,
        phone,
        amount,
      });

      // Redirect to the URL provided by the server
      if (response.data) {
        window.location.href = response.data;
      } else {
        alert("Failed to initiate payment.");
      }
    } catch (error) {
      const { message } = error;
      console.error("Payment initiation failed:", message);
      alert("An error occurred during payment initiation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Make a Payment</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <label className="block mb-2 text-gray-700 font-medium">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <label className="block mb-2 text-gray-700 font-medium">
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <label className="block mb-4 text-gray-700 font-medium">
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 text-lg font-semibold rounded-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          } transition duration-300 ease-in-out`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
