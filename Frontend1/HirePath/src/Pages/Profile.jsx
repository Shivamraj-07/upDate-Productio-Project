import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/popUp"; // Import the Modal component
import NavBar from "../LandingPage/NavBar";

const JobProfileSection = () => {
  const [name, setName] = useState("User Name");
  const [email, setEmail] = useState("user@example.com");
  const [skills, setSkills] = useState(["JavaScript", "React"]);
  const [profileImage, setProfileImage] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/Profile`,
        {
          withCredentials: true,
        }
      );
      const { name, email, skills, ProfileURL, BgURL } = response.data;
      setName(name);
      setEmail(email);
      setSkills(skills);
      setProfileImage(ProfileURL);
      setBackgroundImage(BgURL);
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      const updatedData = {
        name,
        skills,
        ProfileURL: profileImage, // Compressed image URL
        BgURL: backgroundImage, // Compressed background image URL
      };
      console.log(updatedData);

      await axios.patch(
        `${import.meta.env.VITE_API_URL}/Profile/edit`,
        updatedData,
        {
          withCredentials: true,
        }
      );

      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <NavBar Logout={true} />

      <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen p-6">
        <div className="w-full h-[100%] mt-[10%] max-w-lg bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
          {/* Background Image */}
          <div className="relative">
            <img
              src={backgroundImage || "https://via.placeholder.com/600x200"}
              alt="Background"
              className="w-full h-40 object-cover"
            />
          </div>

          {/* Profile Image and Details */}
          <div className="flex flex-col items-center -mt-16 ">
            <img
              src={profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-white z-10 shadow-lg object-cover"
            />
            <h2 className="text-2xl font-bold mt-4">{name}</h2>
            <p className="text-gray-600">{email}</p>

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
          />
        </div>
      </div>
    </>
  );
};

export default JobProfileSection;
