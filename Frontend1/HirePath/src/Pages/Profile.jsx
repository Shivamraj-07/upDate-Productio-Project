import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "../components/popUp";
import EduModal from "../components/EductionPopUp";
import ExpModal from "../components/ExpPopUp"
import NavBar from "../LandingPage/NavBar";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEduOpen, setIsEduModalOpen] = useState(false);
  const [isModalExpOpen, setIsExpModalOpen] = useState(false);
  const [whoIAm, setWhoIAm] = useState("");
  const [institution, setInstitution] = useState([]);
  const [degree, setDegree] = useState([]);
  const [company, setCompany] = useState([]);
  const [experience_Year , setExperience_Year] = useState("")


useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/Profile`,
        { withCredentials: true }
      );
      const { name, email, skills, ProfileURL, BgURL, WhoIAm, institution , degree, company,experience_Year  } = response.data;
      setName(name);
      setEmail(email);
      setSkills(skills);
      setProfileImage(ProfileURL);
      setBackgroundImage(BgURL);
      setWhoIAm(WhoIAm);
      setInstitution(institution)
      setDegree(degree)
      setCompany(company)
      setExperience_Year(experience_Year)
      
    
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
      const updatedDataEdu = {
        institution , 
        degree
      };
      const respon = await axios.put(
        `${import.meta.env.VITE_API_URL}/Profile/editEducation`,
        updatedDataEdu,
        { withCredentials: true }
      );
      if (respon.status === 200) {
        setIsEduModalOpen(false);
        
        // Update the local state with the response data
        const { institution , degree } = respon.data;
        setInstitution(institution)
        setDegree(degree)
        window.location.reload();
        toast.success('Profile updated successfully!');
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error("Error updating education:", error);
      toast.error('Failed to update education. Please try again.');
    }
  };




const handleExperienceSave = async () => {
  try {
    const updatedDataExp = {
      company,
      experience_Year 
    };

    
    const responexp = await axios.put(
      `${import.meta.env.VITE_API_URL}/Profile/editExperience`,
      updatedDataExp,
      { withCredentials: true }
    );

    if (responexp.status === 200) {
        setIsExpModalOpen(false);
        
        // Update the local state with the response data
        const { company, experience_Year } = responexp.data;
        setCompany(company)
        setExperience_Year(experience_Year)
        window.location.reload();
        toast.success('Profile updated successfully!');
    } else {
      throw new Error('Failed to update experience');
    }
  } catch (error) {
    console.error("Error updating experience:", error);
    toast.error('Failed to update experience. Please try again.');
  }
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
          {whoIAm === 'jobseeker' ? (
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
                <h3 onClick={() => setIsEduModalOpen(true)} className="text-sm cursor-pointer rounded-full p-1 hover:underline hover:scale-105 font-semibold">
                  Edit
                </h3>
              </div>

              <div className="flex flex-col mt-4">
                <div className="flex flex-row justify-center items-center">
                  <div>
                  <p>
                  <strong>Institution:</strong>
                </p>
                  </div>
              <div className="">
              {institution.map((institut, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {institut}
                </span>
              ))}
            </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <div>
                  <p>
                  <strong>Degree:</strong>
                </p>
                  </div>
              <div className="">
              {degree.map((deg, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {deg}
                </span>
              ))}
            </div>
                </div>
              </div>
            </div>

            {/* Third Column: Job Experience */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center ">
                <h3 className="text-xl font-semibold">Experience</h3>
                <h3 onClick={() => setIsExpModalOpen(true)} className="text-sm cursor-pointer rounded-full p-1 hover:underline hover:scale-105 font-semibold">
                  Edit
                </h3>
              </div>

              <div className="flex flex-col mt-4">
                <div className="flex flex-row justify-center items-center">
                  <div>
                  <p>
                  <strong>Company:</strong>
                </p>
                  </div>
              <div className="">
              {company.map((comp, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {comp}
                </span>
              ))}
            </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <div>
                  <p>
                  <strong>Experience_Year:</strong> {experience_Year}
                </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          ) : (
            <div></div>
          )}


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

          
          {/* Modal Component Education */}
          <EduModal
            isOpen={isModalEduOpen}
            onClose={() => setIsEduModalOpen(false)}
            onSave={handleEducationEditApi}
            institution={institution}
            setInstitution={setInstitution}
            degree={degree}
            setDegree={setDegree}
          />

            <ExpModal
            isOpen={isModalExpOpen}
            onClose={() => setIsExpModalOpen(false)}
            onSave={handleExperienceSave}
            company={company}
            setCompany={setCompany}
            experience_Year={experience_Year}
            setExperience_Year={setExperience_Year}
            
          />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Profile;