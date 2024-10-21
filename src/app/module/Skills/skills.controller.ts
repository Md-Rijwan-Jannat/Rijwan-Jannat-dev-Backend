import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillService } from './skills.service';

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillService.createSkillIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is created successfully',
    data: result,
  });
});

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillService.getAllSkillsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skills fetched successfully',
    data: result,
  });
});

const getSkill = catchAsync(async (req, res) => {
  const result = await SkillService.getSkillFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill fetched successfully',
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const result = await SkillService.updateSkillInDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const result = await SkillService.deleteSkillFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  });
});

export const SkillController = {
  createSkill,
  getAllSkills,
  getSkill,
  updateSkill,
  deleteSkill,
};
