const Project = require("../models/Project");

// Get All Projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch projects",
      error: error.message,
    });
  }
};

// Add Project
const addProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({
      message: "Project Added Successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add project",
      error: error.message,
    });
  }
};

module.exports = {
  getProjects,
  addProject,
};