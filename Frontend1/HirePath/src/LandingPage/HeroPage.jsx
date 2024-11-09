import React, { useEffect, useState } from "react";
import './heroPage.css'; // Importing the CSS for styles

// Sample job data (replace with actual job data and images)
const jobData = [
  {
    id: 1,
    title: "Service Desk",
    company: "Flipkart",
    location: "Noida, UP",
    logo: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202408/66b4d15c9069f-flipkart-304529645-16x9.jpg?size=1280:720", // Example logo URL
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Swiggy",
    location: "Gungao, Haryana",
    logo: "https://miro.medium.com/v2/resize:fit:800/1*tCLgoTtePAdJhGRImx-B-g.png",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "TCS",
    location: "Remote",
    logo: "https://contentstatic.techgig.com/thumb/msid-112431972,width-800,resizemode-4/WFH-and-hybrid-roles-available-at-TCS-CS-and-IT-grads-must-apply.jpg?246926",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Blinkit",
    location: "Hinjewaadi, Pune",
    logo: "https://cdn.finshots.app/images/2022/03/blinkit.jpg",
  },
  {
    id: 5,
    title: "Graphic Designer",
    company: "Netflix",
    location: "Remote",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Netflix_UI_for_Web.png",
  },
];

const HeroPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to shift the cards
  const shiftCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % jobData.length); // Loop back to the first card when reaching the end
  };

  useEffect(() => {
    const interval = setInterval(shiftCards, 2000); // Change card every 2 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="job-cards-page-Hero">
      <div className="job-cards-Hero">
        {jobData.map((job, index) => {
          const isCenter = index === currentIndex;
          const isLeftSide = index === (currentIndex - 1 + jobData.length) % jobData.length;
          const isRightSide = index === (currentIndex + 1) % jobData.length;

          return (
            <div
              key={job.id}
              className={`job-card-Hero ${isCenter ? "center-card-Hero" : ""} ${
                isLeftSide || isRightSide ? "side-card-Hero" : ""
              }`}
            >
              <div className="logo-container">
                <img src={job.logo} alt={`${job.company} logo`} className="job-logo" />
              </div>
              <h3 className="font-black">{job.title}</h3>
              <p className="company font-semibold">{job.company}</p>
              <p className="location font-light ">{job.location}</p>
              <button  onClick={() => (window.location.href = "/login")} className="apply-button-Hero">Apply Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroPage;
