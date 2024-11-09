import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import NavBar from "../LandingPage/NavBar";
import "./JobForm.css"; // Import the CSS file for styling

const JobForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/add/job`,

        data,

        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Failed to submit form:");
    }
  };

  return (
    <>
      <NavBar />

      <div className="form-container w-full  flex flex-col">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="job-form animate-fade-in bg-slate-200 font-semibold flex flex-col"
        >
          <h2 className="form-title hover:underline transition-all">
            Job Posting Form
          </h2>

          <label className="text-[#4845D2]">
            <span className="text-gray-700">Job Title</span>
            <input
              placeholder="EX. Frontend developer / Devops"
              type="text"
              {...register("title", {
                required: "Job title is required",
                maxLength: {
                  value: 40,
                  message: "Max length is 40 characters",
                },
              })}
              className="form-input"
            />
            {errors.title && (
              <p className="error-text">{errors.title.message}</p>
            )}
          </label>

          <label className="text-[#4845D2]">
            <span className="text-gray-700">Company Name</span>
            <input
              placeholder="EX. Company Name PVT LTD"
              type="text"
              {...register("CompanyName", {
                required: "Company name is required",
                minLength: {
                  value: 10,
                  message: "Minimum length is 10 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Max length is 30 characters",
                },
              })}
              className="form-input"
            />
            {errors.CompanyName && (
              <p className="error-text">{errors.CompanyName.message}</p>
            )}
          </label>

          <label className="text-[#4845D2]">
            <span className="text-gray-700">Mode</span>
            <select
              {...register("Mode", { required: "Please select a mode" })}
              className="form-input"
            >
              <option value="">Select Mode</option>
              <option value="remote">remote</option>
              <option value="onsite">onsite</option>
              <option value="hybrid">hybrid</option>
            </select>
            {errors.Mode && <p className="error-text">{errors.Mode.message}</p>}
          </label>

          <label className="text-[#4845D2]">
            <span className="text-gray-700">Type</span>
            <select
              {...register("Type", { required: "Please select a type" })}
              className="form-input"
            >
              <option value="">Select Type</option>
              <option value="Internship">Internship</option>
              <option value="full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
            {errors.Type && <p className="error-text">{errors.Type.message}</p>}
          </label>

          <label className="text-[#4845D2]">
            <span className="text-gray-700">Number of Openings</span>
            <input
              placeholder="EX. No. Of Position AVailable"
              type="number"
              {...register("NumberOfOpenings", {
                min: { value: 5, message: "Minimum value is 5" },
              })}
              className="form-input"
            />
          </label>

          <label className="text-[#4845D2]">
            <span className="text-gray-700">Perks</span>
            <textarea
              placeholder="EX. Benefits of joing Company"
              {...register("perks", {
                required: "Perks are required",
                minLength: {
                  value: 50,
                  message: "Minimum length is 50 characters",
                },
              })}
              className="form-input"
            />
            {errors.perks && (
              <p className="error-text">{errors.perks.message}</p>
            )}
          </label>

          <label className="text-[#4845D2]">
            <span className="text-gray-700">Skills Required</span>
            <input
              placeholder="EX. Skill Required : Javascript, Docker, Git, Github"
              type="text"
              {...register("SkillRequired", {
                required: "Skills required is required",
                minLength: {
                  value: 20,
                  message: "Minimum length is 20 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Max length is 30 characters",
                },
              })}
              className="form-input"
            />
            {errors.SkillRequired && (
              <p className="error-text">{errors.SkillRequired.message}</p>
            )}
          </label>

          <label className="text-[#4845D2]">
            <span className="text-gray-700">Job Description</span>
            <textarea
              placeholder="EX. Responsibilty of A person"
              {...register("description", {
                required: "Job description is required",
                minLength: {
                  value: 50,
                  message: "Minimum length is 50 characters",
                },
                maxLength: {
                  value: 500,
                  message: "Max length is 500 characters",
                },
              })}
              className="form-input"
            />
            {errors.description && (
              <p className="error-text">{errors.description.message}</p>
            )}
          </label>

          <label className="text-[#4845D2]">
            <span className="text-gray-700">Experience</span>
            <input
              placeholder="EX. 3 year or Fresher"
              type="text"
              {...register("experience", {
                required: "Experience is required",
              })}
              className="form-input"
            />
            {errors.experience && (
              <p className="error-text">{errors.experience.message}</p>
            )}
          </label>

          <label className="text-[#4845D2]">
            <span className="text-gray-700">Salary</span>
            <input
              placeholder="EX. 4LAP-6LPA"
              type="text"
              {...register("salary", { required: "Salary is required" })}
              className="form-input"
            />
            {errors.salary && (
              <p className="error-text">{errors.salary.message}</p>
            )}
          </label>

          <label className="text-[#4845D2]">
            <span className="text-gray-700">Last Date</span>
            <input
              placeholder="EX. 04-04-2025"
              type="date"
              {...register("lastDate", { required: "Last date is required" })}
              className="form-input"
            />
            {errors.lastDate && (
              <p className="error-text">{errors.lastDate.message}</p>
            )}
          </label>
          <label>
            Your Link For Submit data
            <input
              placeholder="EX. googleform link"
              type="text"
              {...register("link", { required: "google form link" })}
              className="form-input "
            />
            {errors.link && <p className="error-text">{errors.link.message}</p>}
          </label>

          <button type="submit" className="submit-button">
            Submit Job Posting
          </button>
        </form>
      </div>
    </>
  );
};

export default JobForm;
