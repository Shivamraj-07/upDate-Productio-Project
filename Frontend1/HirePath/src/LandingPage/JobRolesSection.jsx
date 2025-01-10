// JobRolesSection.js
import React from "react";
import "./NavBar.css";
const JobRolesSection = () => {
  return (
    <>
      <div className="fall_img">
        <h1>Trending job roles on upDate</h1>
        <br />
        <div className="elem">
          <div className="left">
            <h3>Technician</h3>
            <img
              src="https://th.bing.com/th/id/OIP.KKqBc3tkjLcn8MdNjVQTCAHaE7?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div className="right">
            <h2 style={{ color: "darkred" }}>
              <strong>Experience</strong>
            </h2>
            <h5>30 posts</h5>
          </div>
        </div>

        <div className="elem">
          <div className="left">
            <h3>Machine operator</h3>
            <img
              src="https://th.bing.com/th/id/OIP.JWLJgpTvxEBL3Y0f_wLY9wHaEo?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div className="right">
            <h2 style={{ color: "darkred" }}>
              <strong>Hardware / Network</strong>
            </h2>
            <h5>
             20 Vaccency
            </h5>
          </div>
        </div>

        <div className="elem">
          <div className="left">
            <h3>SPECIAL VIEW</h3>
            <img
              src="https://th.bing.com/th/id/OIP.UUXUYhPYPmV70_F7b1b-DQHaFm?w=236&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt=""
            />
          </div>
          <div className="right">
            <h2 style={{ color: "darkred" }}>
              <strong>Back office</strong>
            </h2>
            <h5>Closes Soon</h5>
          </div>
        </div>

        <div className="elem">
          <div className="left">
            <h3>Admin Office Assistant</h3>
            <img
              src="https://th.bing.com/th/id/OIP.8R2Szu6wOEOXkz_RFq6KbgHaEK?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div className="right">
            <h2 style={{ color: "darkred" }}>
              <strong>Graphic designer</strong>
            </h2>
            <h5>5 days left</h5>
          </div>
        </div>

        <div className="elem">
          <div className="left">
            <h3>Frontend developer</h3>
            <img
              src="https://plopdo.com/wp-content/uploads/2021/07/Screenshot-1-1210x642.png?crop=1"
              alt=""
            />
          </div>
          <div className="right">
            <h2 style={{ color: "darkred" }}>
              <strong>Frontend developer</strong>
            </h2>
            <h5>Open Recently</h5>
          </div>
        </div>

        <div className="elem">
          <div className="left">
            <h3>More Jobs</h3>
            <img
              src="https://th.bing.com/th/id/OIP.GXn0J190kWnnI0MNqN2UTwHaFK?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div className="right">
            <h2 style={{ color: "darkred" }}>
              <strong>Freshers</strong>
            </h2>
            <h5>
              Close : 2<sup>nd</sup> Dec 2025
            </h5>
          </div>
        </div>

               <br />
               <br />
             </div>
       
           {/* New Showcase Section for Job Seekers */}
           <div className="bg-gradient-to-r from-red-500 to-red-600 py-16 px-4 sm:px-6 lg:px-8">
             <div className="max-w-7xl mx-auto">
               <h2 className="text-4xl font-extrabold text-white text-center mb-8">
                 Find Your Dream Job with upDate
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                   <div className="text-red-500 text-4xl mb-4">
                     <i className="fas fa-search"></i>
                   </div>
                   <h3 className="text-xl font-semibold mb-2 text-red-700">Easy Job Search</h3>
                   <p className="text-red-900">Browse thousands of job listings tailored to your skills and preferences.</p>
                 </div>
                 <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                   <div className="text-red-500 text-4xl mb-4">
                     <i className="fas fa-file-alt"></i>
                   </div>
                   <h3 className="text-xl font-semibold mb-2 text-red-700">Smart Resume Builder</h3>
                   <p className="text-red-900">Create a professional resume that stands out with our intuitive builder.</p>
                 </div>
                 <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                   <div className="text-red-500 text-4xl mb-4">
                     <i className="fas fa-chart-line"></i>
                   </div>
                   <h3 className="text-xl font-semibold mb-2 text-red-700">Career Growth</h3>
                   <p className="text-red-900">Access resources and tools to help you advance in your career journey.</p>
                 </div>
               </div>
               <div className="text-center mt-12">
               <a href="/JobSection" className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-red-100 transition duration-300">
                   Explore Jobs
                 </a>
               </div>
             </div>
           </div>
           </>
         );
       };
       
       export default JobRolesSection;
