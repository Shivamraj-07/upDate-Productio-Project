import React, { useState } from "react";
import img from "../assets/banner-main.png";

const WelcomeSection = () => {
  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Search query:", searchQuery);
  // };

  return (
    <main
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <section className="relative flex flex-col justify-center items-center text-center min-h-screen p-4">
        {/* Welcome Content */}
        <div className="z-10 text-black w-full max-w-xl px-4 py-8 bg-white bg-opacity-80 rounded-2xl shadow-lg">
          <h1 className="text-4xl md:text-6xl font-black relative mb-4">
            Welcome to{" "}
            <strong className="font-black text-red-600 relative">
              upDate
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-600"></span>
            </strong>
          </h1>
          <p className="text-lg md:text-xl italic mb-8 font-semibold text-gray-800">
            Explore 1000+ job openings and find your dream job today.
          </p>
          <a
            href="/JobSection"
            className="inline-block px-6 py-3 md:px-10 md:py-4 text-lg md:text-xl font-bold text-white bg-red-600 rounded-xl transition duration-300 hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-1"
          >
            Explore Jobs
          </a>
        </div>

        {/* Search Bar */}
        {/* <div className="w-full max-w-xl flex justify-center items-center mt-8 md:mt-12">
          <form
            onSubmit={handleSubmit}
            className="flex w-full shadow-lg overflow-hidden justify-between items-center p-2 rounded-full bg-white"
          >
            <input
              type="text"
              placeholder="Enter what you are looking for?"
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1 font-bold px-4 py-2 md:px-6 md:py-4 rounded-full text-base md:text-xl text-red-600 placeholder:text-gray-500 outline-none bg-transparent"
            />
            <button
              type="submit"
              className="flex items-center justify-center p-2 md:p-4 rounded-full bg-red-600 text-white shadow-md hover:bg-red-700 transition duration-300"
            >
              <img src="search.svg" alt="search" className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </form>
        </div> */}
      </section>
    </main>
  );
};

export default WelcomeSection;