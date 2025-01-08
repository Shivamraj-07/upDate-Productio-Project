import React from "react";
import Resume from "./Resume";
import ResumeTemplat from "../components/ResumeTemplate";
import ResumeComponent from "../components/ResumeTeplate2";

const RT = () => {
  const resumeData = {
    profileImage: "https://via.placeholder.com/150",
    name: "Kristi Laar",
    title: "Registered Nurse",
    contact: {
      address: "111 1st Avenue, Redmond, WA 65432",
      phone: "909.555.0100",
      email: "kristi@example.com",
      website: "www.interestingsite.com",
    },
    communication:
      "I have received several awards for my outstanding communication skills, including recognition for providing exceptional patient education and counseling.",
    leadership:
      'I received the "Outstanding Nursing Student" award during my time in nursing school and have been recognized for my contributions to patient safety and satisfaction in my current role.',
    education: {
      institution: "Bellows College",
      location: "Madison, WI",
      degree: "Bachelors of Science in Nursing",
      coursework:
        "Relevant coursework: Anatomy and physiology, pharmacology, nursing ethics, and patient care management.",
    },
    experience: [
      {
        title: "Registered Nurse",
        department: "Pediatrics",
        company: "Wholeness Healthcare",
        date: "November 20XX - October 20XX",
      },
      {
        title: "Registered Nurse",
        department: "General Practice",
        company: "Wholeness Healthcare",
        date: "December 20XX - November 20XX",
      },
      {
        title: "Registered Nurse",
        department: "General Practice",
        company: "Tyler Stein MD",
        date: "September 20XX - August 20XX",
      },
    ],
    references: "Available upon request",
  };
  const resumeData2 = {
    profileImage: "https://via.placeholder.com/150",
    name: "John Doe",
    title: "Business Manager",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      website: "www.reallygreatsite.com",
    },
    education: [
      {
        year: "2029 - 2030",
        institution: "Wardiere University",
        degree: "Master of Business Management",
      },
      {
        year: "2025 - 2029",
        institution: "Wardiere University",
        degree: "Bachelor of Business",
        gpa: "3.8 / 4.0",
      },
    ],
    skills: [
      "Project Management",
      "Public Relations",
      "Teamwork",
      "Time Management",
      "Leadership",
      "Effective Communication",
      "Critical Thinking",
    ],
    languages: [
      "English (Fluent)",
      "French (Fluent)",
      "German (Basics)",
      "Spanish (Intermediate)",
    ],
    experience: [
      {
        title: "Senior Manager",
        company: "ABC Corp",
        date: "2022 - Present",
        description:
          "Leading project management and cross-functional teams to achieve company objectives.",
      },
      {
        title: "Marketing Specialist",
        company: "XYZ Inc.",
        date: "2020 - 2022",
        description:
          "Coordinated marketing campaigns and supported product launches.",
      },
    ],
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="ml-[30%] my-20">
          <ResumeComponent {...resumeData2} />
        </div>
      </div>
    </>
  );
};

export default RT;
