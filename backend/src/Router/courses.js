const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

router.get('/', async (req, res) => {
    try {
      const courses = await Course.find(); // Fetch all courses
      res.json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error); // Log the error
      res.status(500).json({ message: 'Error fetching courses' });
    }
  });
  
// Add a new course (mapped to /api/courses)
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCourse = new Course({ name, description });
    await newCourse.save();
    res.status(201).json(newCourse); // Respond with the created course
  } catch (error) {
    res.status(500).json({ message: 'Error creating course' });
  }
});

// Delete a course
router.delete("/:id", async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      
      // Use findByIdAndDelete instead of remove()
      await Course.findByIdAndDelete(req.params.id); 
      
      res.json({ message: "Course deleted successfully" });
    } catch (error) {
      console.error("Error deleting course:", error);
      res.status(500).json({ message: "Error deleting course" });
    }
  });
  
module.exports = router;
