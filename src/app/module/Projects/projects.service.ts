import { TProject } from './projects.interface';
import { Project } from './projects.model';

const createProject = async (payload: TProject) => {
  const newProject = await Project.create(payload);
  return newProject;
};

const getAllProjects = async () => {
  const projects = await Project.find().populate('technologies');
  return projects;
};

const getProjectById = async (id: string) => {
  const project = await Project.findById(id).populate('technologies');
  if (!project) {
    throw new Error('Project not found');
  }
  return project;
};

const updateProjectById = async (id: string, payload: Partial<TProject>) => {
  const updatedProject = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!updatedProject) {
    throw new Error('Project not found');
  }
  return updatedProject;
};

const deleteProjectById = async (id: string) => {
  const deletedProject = await Project.findByIdAndDelete(id);
  if (!deletedProject) {
    throw new Error('Project not found');
  }
  return deletedProject;
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
