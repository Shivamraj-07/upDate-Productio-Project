


import React, { useState } from 'react';
import Draggable from 'react-draggable';

function Resumeform() { 
  const [formData, setFormData] = useState({
    personal: { name: '', email: '', phone: '', photo: null },
    education: [{ school: '', degree: '', startYear: '', endYear: '' }],
    experience: [{ company: '', position: '', startYear: '', endYear: '' }],
    skills: ['']
  });

  const handleChange = (e, section, index = null) => {
    const { name, value } = e.target;
    const updatedData = { ...formData };

    if (index === null) {
      updatedData[section][name] = value;
    } else {
      updatedData[section][index][name] = value;
    }

    setFormData(updatedData);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, personal: { ...formData.personal, photo: file } });
  };

  const addField = (section) => {
    const updatedData = { ...formData };
    if (section === 'education' || section === 'experience') {
      updatedData[section].push({ school: '', degree: '', startYear: '', endYear: '' });
    } else if (section === 'skills') {
      updatedData.skills.push('');
    }
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Draggable>
      <div className="flex items-center m-[1rem] justify-center h-auto max-h-[25rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] xl:h-[15rem] bg-gray-100">
  {/* Your content here */}

      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-96"
      >
        <h2 className="text-xl font-semibold text-sky-600 text-center mb-2">Enter Details</h2>

        {/* Personal Details Section */}
        <section className="space-y-1">
          <h3 className="text-lg font-semibold text-sky-500">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.personal.name}
              onChange={(e) => handleChange(e, 'personal')}
              className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.personal.email}
              onChange={(e) => handleChange(e, 'personal')}
              className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.personal.phone}
              onChange={(e) => handleChange(e, 'personal')}
              className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
          <div className="mt-2">
            <label className="block text-sky-500 font-semibold text-sm">Upload Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-1 mt-4">
          <h3 className="text-lg font-semibold text-sky-500">Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <input
                type="text"
                name="school"
                placeholder="School"
                value={edu.school}
                onChange={(e) => handleChange(e, 'education', index)}
                className ="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleChange(e, 'education', index)}
                className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
              />
              <input
                type="text"
                name="startYear"
                placeholder="Start Year"
                value={edu.startYear}
                onChange={(e) => handleChange(e, 'education', index)}
                className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
              />
              <input
                type="text"
                name="endYear"
                placeholder="End Year"
                value={edu.endYear}
                onChange={(e) => handleChange(e, 'education', index)}
                className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
              />
            </div>
          ))}
          <button type="button" onClick={() => addField('education')} className="text-sky-600 text-sm hover:text-sky-800 transition duration-200">Add Education</button>
        </section>

        {/* Work Experience Section */}
        <section className="space-y-1 mt-4">
          <h3 className="text-lg font-semibold text-sky-500">Work Experience</h3>
          {formData.experience.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleChange(e, 'experience', index)}
                className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
              />
              <input
                type="text"
                name="position"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => handleChange(e, 'experience', index)}
                className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
              />
              <input
                type="text"
                name="startYear"
                placeholder="Start Year"
                value={exp.startYear}
                onChange={(e) => handleChange(e, 'experience', index)}
                className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
              />
              <input
                type="text"
                name="endYear"
                placeholder="End Year"
                value={exp.endYear}
                onChange={(e) => handleChange(e, 'experience', index)}
                className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
              />
            </div>
          ))}
          <button type="button" onClick={() => addField('experience')} className="text-sky-600 text-sm hover:text-sky-800 transition duration-200">Add Experience</button>
        </section>

        {/* Skills Section */}
        <section className="space-y-1 mt-4">
          <h3 className="text-lg font-semibold text-sky-500">Skills</h3>
          {formData.skills.map((skill, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Skill"
                value={skill}
                onChange={(e) => {
                  const updatedSkills = [...formData.skills];
                  updatedSkills[index] = e.target.value;
                  setFormData({ ...formData, skills: updatedSkills });
                }}
                className="border border-sky-200 p-1 text-sm rounded shadow focus:outline-none focus:ring-1 focus:ring-sky-300"
              />
            </div>
          ))}
          <button type="button" onClick={() => addField('skills')} className="text-sky-600 text-sm hover:text-sky-800 transition duration-200">Add Skill</button>
        </section>


        <div className='flex justify-center items-center ' >
           <button 
          type="submit" 
          className=" float-center mt-3 w-6/12 bg-sky-500 text-white py-1 rounded shadow-lg hover:bg-sky-600 focus:outline-none focus:ring-1 focus ```javascript
          ring-sky-300"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
         </Draggable>
  );
}

export default Resumeform;









