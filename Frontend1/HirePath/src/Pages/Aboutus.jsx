import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../LandingPage/NavBar";

const About = () => {
  const [fadecolor, setFadecolor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadecolor(true);
    }, 600);
  }, []);

  return (
    <>
      <NavBar />
      <div
        id="aboutpage"
        className={`relative bg-gradient-to-r from-red-800 to-red-600 h-[auto] p-10 transition-opacity duration-1000 ${
          fadecolor ? "opacity-100" : "opacity-0"
        } overflow-y-auto`}
      >
        <div id="toplevel" className="overflow-x-hidden">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>

          {/* About Us Section */}
          <div className="relative mt-20 container mx-auto text-white text-center mb-10">
            <h1 className="text-5xl font-bold mb-4 animate-slide-in-down tracking-wide gradient-text">
              About Us
            </h1>
            <p className="text-xl mb-8 transition duration-700 ease-in-out transform hover:scale-105 hover:text-gray-200">
              'We are dedicated to connecting job seekers with their dream
              careers.'
            </p>
          </div>

          {/* New Section: Our Values, How We Work, and Our Aim */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 relative z-10">
            {/* Our Values */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 hover:bg-gray-100">
              <h2 className="text-3xl font-semibold text-red-800 mb-4 animate-fade-in">
                Our Values
              </h2>
              <p className="text-gray-700">
                "We uphold integrity, embrace innovation, and celebrate
                diversity to create a collaborative environment that drives
                success for all."
              </p>
            </div>

            {/* How We Work */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 hover:bg-gray-100">
              <h2 className="text-3xl font-semibold text-red-800 mb-4 animate-fade-in">
                How We Work
              </h2>
              <p className="text-gray-700">
                "We work with a client-first approach, leveraging our industry
                expertise to customize solutions, promote transparency, and
                build lasting relationships."
              </p>
            </div>

            {/* Our Aim */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 hover:bg-gray-100">
              <h2 className="text-3xl font-semibold text-red-800 mb-4 animate-fade-in">
                Our Aim
              </h2>
              <p className="text-gray-700">
                "Our aim is to be a transformative force in the hiring industry,
                connecting top talent with meaningful opportunities and shaping
                the future of work."
              </p>
            </div>
          </div>

          {/* Our Story Block */}
          <div className="relative mt-20 container mx-auto text-center mb-10">
            <h2 className="text-4xl font-semibold text-white mb-4 animate-slide-in-up">
              Our Story
            </h2>
            <p className="text-lg text-gray-300 mb-8 transition duration-700 ease-in-out transform hover:scale-105 hover:text-white">
              "Founded by industry experts, we started with a vision to
              transform hiring experiences. <br /> Our journey has been one of
              growth, innovation, and creating impactful connections."
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 relative z-10">
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 hover:bg-gray-100">
              <h2 className="text-3xl font-semibold text-red-800 mb-4">Why Choose Us</h2>
              <ul className="text-gray-700 list-disc list-inside">
                <li>Cutting-edge job matching technology</li>
                <li>Personalized career guidance</li>
                <li>Extensive network of top employers</li>
                <li>Skill development resources</li>
                <li>Dedicated support throughout your job search</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 hover:bg-gray-100">
              <h2 className="text-3xl font-semibold text-red-800 mb-4">Our Commitment</h2>
              <p className="text-gray-700">
                We are committed to your success. Our platform is designed to not just find you a job, 
                but to help you build a fulfilling career. We continuously evolve our services to meet 
                the changing needs of the job market and ensure you stay ahead in your professional journey.
              </p>
            </div>
          </div>

          {/* Success Stories */}
          <div className="relative mt-20 container mx-auto text-center mb-10">
            <h2 className="text-4xl font-semibold text-white mb-4 animate-slide-in-up">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {name: "Ratan Singh", role: "Software Developer", story: "Found my dream job at a top tech company within a month!"},
                {name: "Aanya Sharma", role: "Marketing Specialist", story: "Transitioned to a new industry seamlessly with upDate's guidance."},
                {name: "Divya Rai", role: "Data Analyst", story: "Secured a 30% salary increase in my new role thanks to upDate's negotiation tips."}
              ].map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 hover:bg-gray-100">
                  <h3 className="text-xl font-bold text-red-800 mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-4">{story.role}</p>
                  <p className="text-gray-700">"{story.story}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Process */}
          {/* Add your Our Process section here if needed */}
        </div>
      </div>
    </>
  );
};

export default About;