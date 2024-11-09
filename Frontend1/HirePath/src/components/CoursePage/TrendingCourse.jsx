import React from 'react';
import './course.css';
const TrendingCourse = () => {
    const courses = [
        { name: "Web Development", description: "Learn HTML, CSS, and JavaScript for full-stack web development." },
        { name: "Data Science", description: "Analyze data, apply machine learning, and perform data visualization." },
        { name: "Machine Learning", description: "Master ML algorithms and techniques to build intelligent systems." },
        { name: "Cloud Computing", description: "Learn to deploy and manage applications on the cloud." },
        { name: "Cybersecurity", description: "Gain expertise in protecting networks and data from cyber threats." },
        { name: "Human Resources", description: "Looking to enhance your HR skills, you’re in the right place!" },
        { name: "Customer Care", description: "Customer care describes how people are treated when they interact with a brand." },
        { name: "Project Coordinator", description: "A trending job role nowadays." },
        { name: "Python Developer", description: "Gain expertise in coding." },
        { name: "Advance Excel", description: "Learn advanced Excel formulas." },
        { name: "Java Developer", description: "Gain expertise in developing complex code." },
        { name: "Software Developer", description: "One of the most loved careers nowadays." },
        { name: "Artificial Intelligence", description: "Gain skills for the future world." },
        { name: "Backend Developer", description: "Gain expertise in the backend world." },
        { name: "UI/UX Designer", description: "Designing enhances skills and shows creativity." }
    ];

    const applyCourse = (courseName) => {
        alert(`You have applied for the ${courseName} course!`);
    };

    return (
        <section id="trending-courses">
            <h2>Trending Courses</h2>
            <div className="course-grid">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                        <button onClick={() => applyCourse(course.name)}>Apply Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrendingCourse;
