import { TProject } from './projects.interface';
import { Project } from './projects.model';

const createProject = async (payload: TProject) => {
  const newProject = await Project.create(payload);
  return newProject;
};

const getAllProjects = async () => {
  const projects = await Project.find();
  return projects;
};

const getProjectById = async (id: string) => {
  const project = await Project.findById(id);
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
  const updatedProject = await Project.findByIdAndDelete(id);
  if (!updatedProject) {
    throw new Error('Project not found');
  }
  return updatedProject;
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
