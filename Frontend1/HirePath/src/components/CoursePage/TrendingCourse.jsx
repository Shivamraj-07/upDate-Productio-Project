import React, { useState, useEffect } from "react";
import ApplyForm from "./ApplyForm";
import NavBar from "../../LandingPage/NavBar";

const CoursesPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [adminCourses, setAdminCourses] = useState([]); // state to hold admin created courses

  const itCourses = [
    // Static IT courses
    {
      name: "FULL STACK WEB DEVELOPMENT",
      description: "Gain skills for front and backend.",
    },
    {
      name: "DATA SCIENCE",
      description: "Improving skills of Programming , Analytics ,AI and Machine Learning.",
    },
    {
      name: "ARTIFICIAL INTELLIGENCE(AI)",
      description: "Problem solving ,Decision making ,Creativity and Autonomy",
    },
    {
      name: "MACHINE LEARNING",
      description: "Master ML algorithms and techniques to build intelligent systems.",
    },
    {
      name: "CLOUD COMPUTING",
      description: "Learn to deploy and manage applications on the cloud.",
    },
    {
      name: "CYBERSECURITY",
      description: "Gain expertise in protecting networks and data from cyber threats.",
    },
  ];

  const mbaCourses = [
    // Static MBA courses
    {
      name: "DIGITAL MARKETING",
      description: "The use of digital channels and technologies to promote products and services.",
    },
    {
      name: "FINANCIAL RISER MANAGEMENT",
      description: "Gain skills for stock market,and Trading.",
    },
    {
      name: "BUSINESS ANALYTICS",
      description: "Gain skills for data-driven business decisions.",
    },
    {
      name: "HRM (HUMAN RESOURCES MANAGEMENT)",
      description: "Gain skills for Coordinating,Managing,Allocating human capital and more...",
    },
    {
      name: "PRODUCT MANAGEMENT",
      description: "Improving skills of Planning,Developing,Launching,and Managing a product or Service.",
    },
    {
      name: "FINANCIAL MODELLING",
      description: "Developing financial models,Analyzing financial data,Presenting findings,Updating models and more...",
    },
    {
      name: "CPA (CERTIFIED PUBLIC ACCOUNTANT)",
      description: "Prepare,Organize and Analyze financial records.",
    },
    {
      name: "PROJECT MANAGEMENT",
      description: "Planning,Organizing,and Executing a project from start to finish.",
    },
  ];

  // Fetch admin-created courses from the backend
  useEffect(() => {
    const fetchAdminCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        const data = await response.json();

        if (Array.isArray(data)) {
          setAdminCourses(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching admin courses:", error);
      }
    };

    fetchAdminCourses();
  }, []);

  const applyCourse = (courseName) => {
    setSelectedCourse(courseName);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const renderCourseSection = (title, courses) => (
    <section className="mb-20">
      <h2 className="text-4xl font-bold text-white mb-10 relative inline-block group">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center mx-auto px-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 hover:border-red-400 w-full max-w-sm"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-4">{course.name}</h3>
                <p className="text-gray-700 mb-6">{course.description}</p>
              </div>
              <button
                onClick={() => applyCourse(course.name)}
                className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-3 px-6 rounded-full hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <NavBar />
      <div className="py-20 bg-gradient-to-b from-gray-900 via-red-900 to-black text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-16 shadow-text">Trending Courses</h1>
          {renderCourseSection("IT Courses", itCourses)}
          {renderCourseSection("MBA Courses", mbaCourses)}
          {renderCourseSection("Latest Courses", adminCourses)} {/* Render admin-created courses here */}
        </div>
      </div>

      {showForm && (
        <ApplyForm
          courseName={selectedCourse}
          closeForm={closeForm}
        />
      )}
    </>
  );
};

export default CoursesPage;
