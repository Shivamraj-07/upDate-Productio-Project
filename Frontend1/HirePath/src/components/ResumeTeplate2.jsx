import React from "react";

const ResumeComponent = ({
  profileImage,
  name,
  title,
  contact,
  education,
  skills,
  languages,
  experience,
}) => {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Side */}
      <div className="w-1/3 bg-blue-900 text-white p-8">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </div>

        {/* Contact Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">CONTACT</h2>
          <hr className="border-gray-400 my-2" />
          <p className="mt-2">{contact.phone}</p>
          <p>{contact.email}</p>
          <p>{contact.address}</p>
          <p>{contact.website}</p>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">EDUCATION</h2>
          <hr className="border-gray-400 my-2" />
          {education.map((edu, index) => (
            <div key={index} className="mt-4">
              <p className="font-bold">{edu.year}</p>
              <p>{edu.institution}</p>
              <p className="text-sm">{edu.degree}</p>
              {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">SKILLS</h2>
          <hr className="border-gray-400 my-2" />
          <ul className="mt-2 list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index} className="text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Languages Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">LANGUAGES</h2>
          <hr className="border-gray-400 my-2" />
          <ul className="mt-2 list-disc list-inside">
            {languages.map((language, index) => (
              <li key={index} className="text-sm">
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-2/3 bg-white p-8">
        {/* Name and Title */}
        <h1 className="text-4xl font-bold text-blue-900">{name}</h1>
        <h3 className="text-xl text-gray-700">{title}</h3>
        <hr className="my-4 border-blue-300" />

        <div className="my-5 flex flex-col">
          <h2 className="text-lg font-semibold text-blue-900">Summary</h2>
          <hr className="border-gray-400 my-2" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            amet quos temporibus est fugit magni expedita, quaerat saepe
            explicabo in quidem consectetur blanditiis rerum dolorem culpa
            laborum reiciendis dolor esse.
          </p>
        </div>
        <div className="my-5 flex flex-col">
          <h2 className="text-lg font-semibold text-blue-900">projects</h2>
          <hr className="border-gray-400 my-2" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            amet quos temporibus est fugit magni expedita, quaerat saepe
            explicabo in quidem consectetur blanditiis rerum dolorem culpa
            laborum reiciendis dolor esse.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-blue-900">EXPERIENCE</h2>
          <hr className="border-gray-400 my-2" />
          {experience.map((job, index) => (
            <div key={index} className="mt-4">
              <p className="font-bold">{job.title}</p>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-700">{job.date}</p>
              <p className="text-sm text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
