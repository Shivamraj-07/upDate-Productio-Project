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
        className={`relative bg-gradient-to-r from-[#3D52A0] to-[#7091E6] h-[auto]  p-10 transition-opacity duration-1000 ${
          fadecolor ? "opacity-100" : "opacity-0"
        } overflow-y-auto  `}
      >
        <div id="toplevel" className="overflow-x-hidden">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>

          {/* About Us Section */}
          <div className="relative mt-20 container mx-auto text-[#EDEBF5] text-center mb-10">
            <h1 className="text-5xl font-bold mb-4 animate-slide-in-down tracking-wide gradient-text">
              About Us
            </h1>
            <p className="text-xl mb-8 transition duration-700 ease-in-out transform hover:scale-105 hover:text-[#ADB8DA]">
              'We are dedicated to connecting job seekers with their dream
              careers.'
            </p>
          </div>

          {/* New Section: Our Values, How We Work, and Our Aim */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 relative z-10">
            {/* Our Values */}
            <div className="bg-[#EDEBF5] rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 hover:bg-[#F4F5FA]">
              <h2 className="text-3xl font-semibold text-[#3D52A0] mb-4 animate-fade-in">
                Our Values
              </h2>
              <p className="text-[#707A94]">
                "We uphold integrity, embrace innovation, and celebrate
                diversity to create a collaborative environment that drives
                success for all."
              </p>
            </div>

            {/* How We Work */}
            <div className="bg-[#EDEBF5] rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 hover:bg-[#F4F5FA]">
              <h2 className="text-3xl font-semibold text-[#3D52A0] mb-4 animate-fade-in">
                How We Work
              </h2>
              <p className="text-[#707A94]">
                "We work with a client-first approach, leveraging our industry
                expertise to customize solutions, promote transparency, and
                build lasting relationships."
              </p>
            </div>

            {/* Our Aim */}
            <div className="bg-[#EDEBF5] rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 hover:bg-[#F4F5FA]">
              <h2 className="text-3xl font-semibold text-[#3D52A0] mb-4 animate-fade-in">
                Our Aim
              </h2>
              <p className="text-[#707A94]">
                "Our aim is to be a transformative force in the hiring industry,
                connecting top talent with meaningful opportunities and shaping
                the future of work."
              </p>
            </div>
          </div>

          {/* Our Story Block */}
          <div className="relative mt-20 container mx-auto text-center mb-10">
            <h2 className="text-4xl font-semibold text-[#EDEBF5] mb-4 animate-slide-in-up">
              Our Story
            </h2>
            <p className="text-lg text-[#ADB8DA] mb-8 transition duration-700 ease-in-out transform hover:scale-105 hover:text-[#EDEBF5]">
              "Founded by industry experts, we started with a vision to
              transform hiring experiences. <br /> Our journey has been one of
              growth, innovation, and creating impactful connections."
            </p>
          </div>

          {/* Meet Our Team */}
          <div className="mt-10 text-center relative z-10">
            <h2 className="text-4xl font-semibold text-[#EDEBF5] mb-4 animate-slide-in-up tracking-wide">
              Meet Our Team
            </h2>
            <p className="text-lg text-[#ADB8DA] mb-8 transition duration-700 ease-in-out transform hover:scale-105 hover:text-[#EDEBF5]">
              A diverse team of professionals passionate about helping you
              succeed.
            </p>
          </div>

          <div className="flex flex-wrap justify-center relative z-10">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-[#EDEBF5] rounded-lg shadow-lg m-4 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 hover:bg-[#F4F5FA]"
              >
                <h3 className="text-xl font-bold text-[#3D52A0]">
                  Team Member {index + 1}
                </h3>
                <p className="text-[#707A94]">Role: Position {index + 1}</p>
              </div>
            ))}
          </div>

          {/* Testimonials Block */}
          <div className="relative mt-20 container mx-auto text-center mb-10">
            <h2 className="text-4xl font-semibold text-[#EDEBF5] mb-4 animate-slide-in-up">
              Testimonials
            </h2>
            <p className="text-lg text-[#ADB8DA] mb-8">
              What our clients say about us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-[#EDEBF5] rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 hover:bg-[#F4F5FA]"
                >
                  <p className="text-[#707A94]">
                    "This team exceeded our expectations. We couldn't be happier
                    with the service!"
                  </p>
                  <h3 className="mt-4 font-semibold text-[#3D52A0]">
                    Client {index + 1}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us Block */}
          <div className="relative mt-20 container mx-auto text-center mb-10 p-10 bg-[#8697C4] rounded-lg shadow-xl">
            <h2 className="text-4xl font-semibold text-[#EDEBF5] mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-[#EDEBF5] mb-8">
              Reach out to us for more information.
            </p>

            <Link to="/contact">
              <button className="px-8 py-3 bg-[#3D52A0] text-[#EDEBF5] font-semibold rounded-lg shadow-md hover:bg-[#2C3A7A] transition duration-500 transform hover:scale-105">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
