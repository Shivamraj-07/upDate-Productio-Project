import React, { useEffect } from "react";
import "./NavBar.css";
import { FaUserCheck, FaFileAlt, FaChartLine, FaGraduationCap } from 'react-icons/fa';

const FeaturesSection = () => {
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll(".feature");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-4");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsToAnimate.forEach((element) => {
      element.classList.add("opacity-0", "translate-y-4", "transition-all", "duration-500", "ease-in-out");
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16 relative">
          Key Features
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600 mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <FeatureCard 
            icon={<FaUserCheck className="text-5xl text-red-600 mb-4" />}
            title="Personalized Job Counsel"
            description="Receive tailored job suggestions based on your unique skills and interests."
          />
          <FeatureCard 
            icon={<FaFileAlt className="text-5xl text-red-600 mb-4" />}
            title="Resume Builder"
            description="Create a professional resume in minutes with our intuitive built-in tools."
          />
          <FeatureCard 
            icon={<FaChartLine className="text-5xl text-red-600 mb-4" />}
            title="Application Tracking"
            description="Stay organized by tracking all your applications and their current status."
          />
          <FeatureCard 
            icon={<FaGraduationCap className="text-5xl text-red-600 mb-4" />}
            title="Interview Prep Resources"
            description="Access comprehensive guides and tips to excel in your next interview."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-red-400">
    <div className="text-center">
      {icon}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
    </div>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default FeaturesSection;