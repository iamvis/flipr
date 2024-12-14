// controllers/projectController.js

const Project = require('../models/Project');

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve projects' });
  }
};

const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create project' });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update project' });
  }
};

const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndRemove(req.params.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete project' });
  }
};

module.exports = { getProjects, createProject, updateProject, deleteProject };