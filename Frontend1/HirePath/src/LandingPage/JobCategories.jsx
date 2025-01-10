import React from "react";
import { FaCode, FaChartLine, FaPaintBrush, FaCalculator, FaLaptopCode, FaUsers, FaChartBar, FaHeadset } from 'react-icons/fa';

const JobCategories = () => {
  const categories = [
    { icon: <FaCode />, title: "Software Development", description: "Explore the latest software development jobs." },
    { icon: <FaChartLine />, title: "Marketing", description: "Find exciting roles in digital and content marketing." },
    { icon: <FaPaintBrush />, title: "Design", description: "Creative design positions await for graphic and UI/UX designers." },
    { icon: <FaCalculator />, title: "Finance", description: "Discover job opportunities in finance and accounting." },
    { icon: <FaLaptopCode />, title: "Web Developer", description: "Creative job opportunity for web developers." },
    { icon: <FaUsers />, title: "HR", description: "Here you can find your best recruitment job." },
    { icon: <FaChartBar />, title: "Data Analyst", description: "Best opportunity for data analyst positions." },
    { icon: <FaHeadset />, title: "Customer Care", description: "100+ vacancies are waiting for you." },
  ];

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          Popular Job Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="text-4xl text-red-600 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-700">
                  {category.description}
                </p>
              </div>
              <div className="bg-red-600 px-6 py-3">
                <a href="/JobSection" className="text-white text-sm font-medium hover:underline">
                  Explore Jobs &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;