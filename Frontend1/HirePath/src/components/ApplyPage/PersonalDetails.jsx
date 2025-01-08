import React from "react";

const PersonalDetails = () => {
  return (
    <div className="form-section active w-full max-w-3xl bg-white p-10 rounded-lg shadow-lg mt-20 min-h-[80vh] overflow-y-auto">
      <h3 className="text-center text-2xl font-semibold text-gray-800 mb-5 relative">
        Personal Details
        <span className="block absolute left-1/2 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-500 transform -translate-x-1/2 group-hover:w-4/5"></span>
      </h3>
      <div className="input-group mb-5">
        <label htmlFor="name" className="text-lg text-gray-700 mb-1 block">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
      <div className="input-group mb-5">
        <label htmlFor="email" className="text-lg text-gray-700 mb-1 block">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
      <div className="input-group mb-5">
        <label htmlFor="phone" className="text-lg text-gray-700 mb-1 block">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
      <div className="input-group mb-5">
        <label htmlFor="dob" className="text-lg text-gray-700 mb-1 block">
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
      <div className="input-group mb-5">
        <label
          htmlFor="fatherName"
          className="text-lg text-gray-700 mb-1 block"
        >
          Father's Name
        </label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          placeholder="Enter your father's name"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
      <div className="input-group mb-5">
        <label
          htmlFor="motherName"
          className="text-lg text-gray-700 mb-1 block"
        >
          Mother's Name
        </label>
        <input
          type="text"
          id="motherName"
          name="motherName"
          placeholder="Enter your mother's name"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
