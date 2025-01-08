import React from "react";

const DocumentsUpload = () => (
  <div className="form-section active w-full max-w-3xl bg-white p-10 rounded-lg shadow-lg mt-20 min-h-[80vh] overflow-y-auto">
    <h3 className="text-center text-2xl font-semibold text-gray-800 mb-5 relative">
      Upload Documents
      <span className="block absolute left-1/2 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-500 transform -translate-x-1/2 group-hover:w-4/5"></span>
    </h3>
    <div className="input-group mb-5">
      <label
        htmlFor="highSchoolCert"
        className="text-lg text-gray-700 mb-1 block"
      >
        High School Certificate (Optional)
      </label>
      <input
        type="file"
        id="highSchoolCert"
        name="highSchoolCert"
        className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
      />
    </div>
    <div className="input-group mb-5">
      <label
        htmlFor="intermediateCert"
        className="text-lg text-gray-700 mb-1 block"
      >
        Intermediate Certificate (Optional)
      </label>
      <input
        type="file"
        id="intermediateCert"
        name="intermediateCert"
        className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
      />
    </div>
    <div className="input-group mb-5">
      <label
        htmlFor="graduationCert"
        className="text-lg text-gray-700 mb-1 block"
      >
        Graduation Certificate (Optional)
      </label>
      <input
        type="file"
        id="graduationCert"
        name="graduationCert"
        className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
      />
    </div>
    <div className="input-group mb-5">
      <label htmlFor="photo" className="text-lg text-gray-700 mb-1 block">
        Profile Photo (Optional)
      </label>
      <input
        type="file"
        id="photo"
        name="photo"
        className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
      />
    </div>
    <div className="input-group mb-5">
      <label htmlFor="aadharCard" className="text-lg text-gray-700 mb-1 block">
        Aadhar Card (Optional)
      </label>
      <input
        type="file"
        id="aadharCard"
        name="aadharCard"
        className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
      />
    </div>
    <div className="input-group mb-5">
      <label htmlFor="resume" className="text-lg text-gray-700 mb-1 block">
        Upload Resume (Optional)
      </label>
      <input
        type="file"
        id="resume"
        name="resume"
        className="w-full p-3 rounded-md border border-gray-300 text-lg focus:border-green-500 focus:shadow-lg"
      />
    </div>
  </div>
);

export default DocumentsUpload;
