import React from "react";

const QualificationDetails = () => {
  return (
    <div className="form-section active w-full max-w-3xl bg-white p-10 rounded-lg shadow-lg mt-20 min-h-[80vh] overflow-y-auto">
      <h3 className="text-center text-2xl font-semibold text-gray-800 mb-5 relative">
        Qualification Details
        <span className="block absolute left-1/2 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-500 transform -translate-x-1/2 group-hover:w-4/5"></span>
      </h3>
      <div className="input-group mb-5">
        <label
          htmlFor="highSchool"
          className="text-lg text-gray-700 mb-1 block"
        >
          High School
        </label>
        <input
          type="text"
          id="highSchool"
          name="highSchool"
          placeholder="Enter High School name"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
      <div className="input-group mb-5">
        <label
          htmlFor="highSchoolYear"
          className="text-lg text-gray-700 mb-1 block"
        >
          Passing Year
        </label>
        <input
          type="number"
          id="highSchoolYear"
          name="highSchoolYear"
          placeholder="Enter passing year"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
      <div className="input-group mb-5">
        <label
          htmlFor="intermediate"
          className="text-lg text-gray-700 mb-1 block"
        >
          Intermediate
        </label>
        <input
          type="text"
          id="intermediate"
          name="intermediate"
          placeholder="Enter Intermediate name"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
      <div className="input-group mb-5">
        <label
          htmlFor="intermediateYear"
          className="text-lg text-gray-700 mb-1 block"
        >
          Passing Year
        </label>
        <input
          type="number"
          id="intermediateYear"
          name="intermediateYear"
          placeholder="Enter passing year"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
      <div className="input-group mb-5">
        <label
          htmlFor="graduation"
          className="text-lg text-gray-700 mb-1 block"
        >
          Graduation
        </label>
        <input
          type="text"
          id="graduation"
          name="graduation"
          placeholder="Enter Graduation name"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
      <div className="input-group mb-5">
        <label
          htmlFor="graduationYear"
          className="text-lg text-gray-700 mb-1 block"
        >
          Passing Year
        </label>
        <input
          type="number"
          id="graduationYear"
          name="graduationYear"
          placeholder="Enter passing year"
          required
          className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
        />
      </div>
    </div>
  );
};

export default QualificationDetails;
