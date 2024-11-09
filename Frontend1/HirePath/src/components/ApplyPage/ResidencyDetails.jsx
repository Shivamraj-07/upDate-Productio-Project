import React from "react";

const ResidencyDetails = () => {
  return (
    <div className="form-section active w-full max-w-3xl bg-white p-10 rounded-lg shadow-lg mt-20 min-h-[80vh] overflow-y-auto">
      <h3 className="text-center text-2xl font-semibold text-gray-800 mb-5 relative">
        Residency Details
        <span className="block absolute left-1/2 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-500 transform -translate-x-1/2 group-hover:w-4/5"></span>
      </h3>
      <div className="input-group mb-5">
        <label htmlFor="address" className="text-lg text-gray-700 mb-1 block">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your address"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
    </div>
  );
};

export default ResidencyDetails;
