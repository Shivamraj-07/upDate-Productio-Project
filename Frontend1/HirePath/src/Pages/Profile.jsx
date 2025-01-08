import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "../components/popUp";
import NavBar from "../LandingPage/NavBar";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [whoIAm, setWhoIAm] = useState("");
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [editingExperience, setEditingExperience] = useState(null);

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/Profile`,
        { withCredentials: true }
      );
      const { name, email, skills, ProfileURL, BgURL, WhoIAm, education, experiences } = response.data;
      setName(name);
      setEmail(email);
      setSkills(skills);
      setProfileImage(ProfileURL);
      setBackgroundImage(BgURL);
      setEducations(education);
      setExperiences(experiences);
      setWhoIAm(WhoIAm);
    
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error('Failed to fetch user data. Please refresh the page.');
    }
  };

  fetchUserData();
}, []);

 const handleSave = async () => {
   try {
     const updatedData = {
       name,
       skills,
       ProfileURL: profileImage,
       BgURL: backgroundImage,
       WhoIAm: whoIAm,
     };
 
     const response = await axios.put(
       `${import.meta.env.VITE_API_URL}/Profile/edit`,
       updatedData,
       { withCredentials: true }
     );
 
     if (response.status === 200) {
       setIsModalOpen(false);
       
       // Update the local state with the response data
       const { name, email, skills, ProfileURL, BgURL, WhoIAm } = response.data;
       setName(name);
       setEmail(email);
       setSkills(skills);
       setProfileImage(ProfileURL);
       setBackgroundImage(BgURL);
       setWhoIAm(WhoIAm);
       window.location.reload();
       toast.success('Profile updated successfully!');
     } else {
       throw new Error('Failed to update profile');
     }
   } catch (error) {
     console.error("Error updating profile:", error);
     toast.error('Failed to update profile. Please try again.');
   }
 };

  const handleEducationEditApi = async () => {
    try {
      const updatedEducation = [
        {
          degree: "Bachelors in Computer Science",
          school: "University of XYZ",
          year: "2018-2022",
        },
        {
          degree: "Masters in Web Development",
          school: "University of ABC",
          year: "2023-Present",
        },
      ];

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/Profile/editEducation`, {
        education: updatedEducation,
      });
      console.log("Education updated successfully:", res);
      setEducations(updatedEducation);
      toast.success('Education updated successfully!');
    } catch (error) {
      console.error("Error updating education:", error);
      toast.error('Failed to update education. Please try again.');
    }
  };

  const handleExperienceEdit = (index) => {
    setEditingExperience(index);
  };



const handleExperienceSave = async (index) => {
  try {
    const updatedExperiences = [...experiences];
    const editedExperience = updatedExperiences[index];
    
    const response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/Profile/editExperience`,
      { experience: editedExperience },
      { withCredentials: true }
    );

    if (response.status === 200) {
      setExperiences(updatedExperiences);
      setEditingExperience(null);
      
      // Show success message as a popup
      toast.success('Experience updated successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      throw new Error('Failed to update experience');
    }
  } catch (error) {
    console.error("Error updating experience:", error);
    toast.error('Failed to update experience. Please try again.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  return (
    <>
      <NavBar Logout={true} />
      <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen p-6">
        <div className="w-full h-[100%] mt-[10%] max-w-6xl bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
          {/* Background Image */}
          <div className="relative">
            <img
              src={backgroundImage || "https://via.placeholder.com/600x200"}
              alt="Background"
              className="w-full h-40 object-cover"
            />
          </div>

          {/* Profile Details */}
          <div className="flex flex-col items-center -mt-16">
            <img
              src={profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-white z-10 shadow-lg object-cover"
            />
            <h2 className="text-2xl font-bold mt-4">{name}</h2>
            <p className="text-gray-600">{email}</p>

            {/* Who I Am */}
            <div className="mt-4">
              <p className="font-medium"><h3>{whoIAm}</h3></p>
            </div>

            {/* Skills Section */}
            <div className="mt-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Edit Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 text-blue-500 hover:underline"
            >
              Edit Profile
            </button>
          </div>

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-4">
            {/* First Column: Profile */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Profile</h3>
              <div className="mt-4">
                <p>
                  <strong>Name:</strong> {name}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <div className="mt-4">
                  <h4 className="font-medium">Skills</h4>
                  <ul className="list-disc pl-5 text-gray-700 mt-2">
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Second Column: Education */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center ">
                <h3 className="text-xl font-semibold">Education</h3>
                <h3 onClick={handleEducationEditApi} className="text-sm cursor-pointer rounded-full p-1 hover:underline hover:scale-105 font-semibold">
                  Edit
                </h3>
              </div>

              <div className="mt-4">
                {educations &&
                  educations.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-gray-600">
                        {edu.school} - {edu.year}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Third Column: Job Experience */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Experience</h3>
              <div className="mt-4">
                {experiences &&
                  experiences.map((exp, index) => (
                    <div key={index} className="mb-4">
                      <p
                        className="font-medium"
                        contentEditable={editingExperience === index}
                        onBlur={(e) => handleExperienceChange(index, 'position', e.target.textContent)}
                        suppressContentEditableWarning={true}
                      >
                        {exp.position}
                      </p>
                      <p
                        className="text-gray-600"
                        contentEditable={editingExperience === index}
                        onBlur={(e) => {
                          const [company, year] = e.target.textContent.split(' - ');
                          handleExperienceChange(index, 'company', company);
                          handleExperienceChange(index, 'year', year);
                        }}
                        suppressContentEditableWarning={true}
                      >
                        {exp.company} - {exp.year}
                      </p>
                      <p
                        className="text-gray-700"
                        contentEditable={editingExperience === index}
                        onBlur={(e) => handleExperienceChange(index, 'description', e.target.textContent)}
                        suppressContentEditableWarning={true}
                      >
                        {exp.description}
                      </p>
                      {editingExperience === index ? (
                        <button
                          onClick={() => handleExperienceSave(index)}
                          className="mt-2 text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleExperienceEdit(index)}
                          className="mt-2 text-sm text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Modal Component */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSave}
            name={name}
            setName={setName}
            skills={skills}
            setSkills={setSkills}
            setProfileImage={setProfileImage}
            setBackgroundImage={setBackgroundImage}
            whoIAm={whoIAm}
            setWhoIAm={setWhoIAm}
          />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Profile;