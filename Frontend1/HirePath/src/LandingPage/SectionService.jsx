import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBriefcase, FaComments, FaFileAlt, FaUserTie } from 'react-icons/fa';

const SectionService = () => {
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    const serviceCards = serviceCardsRef.current;

    const revealServiceCards = () => {
      const triggerBottom = window.innerHeight * 0.85;

      serviceCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
          setTimeout(() => {
            card.classList.remove('opacity-0', 'translate-y-4');
            card.classList.add('opacity-100', 'translate-y-0');
          }, index * 200);
        }
      });
    };

    window.addEventListener("scroll", revealServiceCards);
    revealServiceCards();

    return () => {
      window.removeEventListener("scroll", revealServiceCards);
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-red-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-red-600 text-center mb-12">
          Services We Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Job Listings", icon: <FaBriefcase />, link: "/" },
            { title: "Career Counseling", icon: <FaComments />, link: "/" },
            { title: "Resume Building", icon: <FaFileAlt />, link: "/resume" },
            { title: "Interview Prep", icon: <FaUserTie />, link: "/ComingSoon" },
          ].map((service, index) => (
            <Link to={service.link} key={index}>
              <div
                ref={(el) => (serviceCardsRef.current[index] = el)}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl opacity-0 translate-y-4"
              >
                <div className="p-6">
                  <div className="text-4xl text-red-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    Explore our {service.title.toLowerCase()} services and take your career to the next level.
                  </p>
                </div>
                <div className="bg-red-600 px-6 py-3">
                  <span className="text-white text-sm font-medium">Learn More &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionService;