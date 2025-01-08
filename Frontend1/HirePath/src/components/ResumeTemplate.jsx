import React from "react";

const ResumeTemplat = ({
  profileImage,
  name,
  title,
  contact,
  communication,
  leadership,
  education,
  experience,
  references,
}) => {
  return (
    <div className="w-[50%] border border-green-300 my-10 ml-[20%]">
      <div className="flex font-sans">
        {/* Left Side */}
        <div className="w-1/3 bg-gray-100 p-6">
          {/* Profile Image */}
          <img
            src={profileImage}
            alt="Profile"
            className="w-3/4 mx-auto rounded-full"
          />

          {/* Contact Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2">{contact.address}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            <p>{contact.website}</p>
          </div>

          {/* Communication Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Communication</h2>
            <p className="mt-2 text-sm text-gray-700">{communication}</p>
          </div>

          {/* Leadership Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Leadership</h2>
            <p className="mt-2 text-sm text-gray-700">{leadership}</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-2/3 p-6">
          {/* Name and Title */}
          <h1 className="text-4xl font-bold">{name}</h1>
          <h3 className="text-xl text-gray-600">{title}</h3>
          <hr className="my-4 border-gray-300" />

          {/* Education Section */}
          <div>
            <h2 className="text-lg font-semibold">Education</h2>
            <p className="mt-2 font-bold">
              {education.institution} | {education.location}
            </p>
            <p className="text-sm text-gray-700">{education.degree}</p>
            <p className="text-sm text-gray-700">{education.coursework}</p>
          </div>

          {/* Experience Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Experience</h2>
            {experience.map((job, index) => (
              <div key={index} className="mt-4">
                <p className="font-bold">
                  {job.title} | {job.department} | {job.company}
                </p>
                <p className="text-sm text-gray-700">{job.date}</p>
              </div>
            ))}
          </div>

          {/* References Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">References</h2>
            <p className="text-sm text-gray-700">{references}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplat;
