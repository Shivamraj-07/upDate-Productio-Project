import React, { useEffect } from "react";
import "./NavBar.css";

const FeaturesSection = () => {
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll(".feature, .card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );

    elementsToAnimate.forEach((element) => {
      // Set initial styles for animation
      element.style.opacity = 0;
      element.style.transform = "translateY(20px)"; // Start slightly below
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element); // Cleanup observer on unmount
      });
    };
  }, []);

  return (
    <>
      {/* My key features section code */}
      <section id="features" className="section">
        <h2>Key Features</h2>
        <br />

        <div className="feature" id="feature1">
          <h3>Personalized Job Recommendations</h3>
          <p>Receive job suggestions based on your skills and interests.</p>
        </div>

        <div className="feature" id="feature2">
          <h3>Resume Builder</h3>
          <p>
            Use our built-in tools to create a professional resume in minutes.
          </p>
        </div>

        <div className="feature" id="feature3">
          <h3>Application Tracking</h3>
          <p>
            Track all your applications and see where you stand in the hiring
            process.
          </p>
        </div>

        <div className="feature" id="feature4">
          <h3>Interview Prep Resources</h3>
          <p>Access guides and tips to ace your next interview.</p>
        </div>
      </section>

      <br />
      <br />
    </>
  );
};

export default FeaturesSection;
