import React from "react";

const WelcomeSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="z-10 text-white mb-10 p-4 shadow-lg bg-opacity-0 rounded-lg">
        <h1 className="relative text-6xl md:text-7xl text-red-600 font-black">
          <span className="absolute top-2 text-white">Welcome to</span>
          Welcome to{" "}
          <strong className="font-serif relative text-8xl font-extrabold text-red-600">
            <span className="absolute top-0 text-white">HirePath</span> HirePath
          </strong>
        </h1>
        <p className="text-xl md:text-2xl italic mt-6 mb-8">
          Explore 1000+ job openings and find your dream job today.
        </p>
        <a
          href="/login"
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition-all duration-200 ease-in-out transform hover:scale-105 animate-shake-jump"
        >
          Explore Jobs
        </a>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-black/30 via-black/50 to-black/30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 animate-slideshow"
          style={{ backgroundImage: "url('/images (4).jpg')" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 animate-slideshow delay-5000"
          style={{ backgroundImage: "url('/nature-3082832_1280.jpg')" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 animate-slideshow delay-10000"
          style={{ backgroundImage: "url('../assets/water.jpg')" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 animate-slideshow delay-15000"
          style={{
            backgroundImage: `url()`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default WelcomeSection;
