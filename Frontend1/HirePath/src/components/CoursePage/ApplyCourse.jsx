import React, { useEffect } from 'react';
import './course.css';
const ApplyCourse = () => {
    const submitApplication = (event) => {
        event.preventDefault();
        alert('Application submitted!');
    };

    useEffect(() => {
        const applySection = document.getElementById('apply-course');
        const checkVisibility = () => {
            const sectionPosition = applySection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (sectionPosition < screenPosition) {
                applySection.classList.add('visible');
            }
        };

        window.addEventListener('scroll', checkVisibility);
        return () => window.removeEventListener('scroll', checkVisibility);
    }, []);

    return (
        <section id="apply-course">
            <h2>Apply for Courses</h2>
            <form id="apply-form" onSubmit={submitApplication}>
                <label htmlFor="course">Course Name:</label>
                <input type="text" id="course" name="course" required />
                
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <button type="submit">Submit Application</button>
            </form>
        </section>
    );
};

export default ApplyCourse;
