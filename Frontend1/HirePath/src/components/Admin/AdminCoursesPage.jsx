import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";

const AdminCoursesPage = () => {
  const [courses, setCourses] = useState([]); // Initializing with an empty array
  const [newCourse, setNewCourse] = useState({
    name: "",
    description: "",
  }); // State for new course form

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        const data = await response.json();

        // Check if the fetched data is an array
        if (Array.isArray(data)) {
          setCourses(data); // Only set if it's an array
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []); // Empty dependency array to fetch once when the component mounts

  const handleDelete = async (courseId) => {
    console.log("Deleting course with ID:", courseId); // Log course ID
    try {
      const response = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Course deleted successfully.');
        setCourses(courses.filter((course) => course._id !== courseId)); // Remove course from local state
      } else {
        alert('Failed to delete course.');
      }
    } catch (error) {
      console.error('Error deleting course:', error);
      alert('An error occurred while deleting the course.');
    }
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle the form submission to create a new course
  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/courses", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });

      const data = await response.json();

      if (response.ok) {
        setCourses([...courses, data]); // Add the new course to the state
        setNewCourse({ name: "", description: "" }); // Reset form fields
        alert('Course created successfully.');
      } else {
        alert('Failed to create course.');
      }
    } catch (error) {
      console.error('Error creating course:', error);
      alert('An error occurred while creating the course.');
    }
  };

  return (
    <> 
      <AdminNavBar />
      <div className="p-7 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Admin Panel</h2>

        {/* New Course Form */}
        <div className="mb-6 p-4 bg-white rounded shadow-md">
          <h3 className="text-xl font-bold mb-4">Create New Course</h3>
          <form onSubmit={handleCreateCourse}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Course Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newCourse.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Course Description</label>
              <textarea
                id="description"
                name="description"
                value={newCourse.description}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Create Course</button>
          </form>
        </div>

        {/* List of Courses */}
        <div>
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course) => (
              <div key={course._id} className="border p-4 mb-4 rounded">
                <h3 className="text-xl font-bold">{course.name}</h3>
                <p>{course.description}</p>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="bg-red-600 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No courses available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminCoursesPage;
