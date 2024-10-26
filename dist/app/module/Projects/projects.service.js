"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const projects_model_1 = require("./projects.model");
const createProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newProject = yield projects_model_1.Project.create(payload);
    return newProject;
});
const getAllProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield projects_model_1.Project.find().populate('technologies');
    return projects;
});
const getProjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield projects_model_1.Project.findById(id).populate('technologies');
    if (!project) {
        throw new Error('Project not found');
    }
    return project;
});
const updateProjectById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProject = yield projects_model_1.Project.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!updatedProject) {
        throw new Error('Project not found');
    }
    return updatedProject;
});
const deleteProjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProject = yield projects_model_1.Project.findByIdAndDelete(id);
    if (!deletedProject) {
        throw new Error('Project not found');
    }
    return deletedProject;
});
exports.ProjectService = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById,
};
