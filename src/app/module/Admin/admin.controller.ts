import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminService } from './admin.service';

const createAdmin = catchAsync(async (req, res) => {
  const result = await AdminService.createAdminIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin is created successfully',
    data: result,
  });
});

const getAdmin = catchAsync(async (req, res) => {
  const result = await AdminService.getAdminFromDB(req.params.adminId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get admin successfully',
    data: result,
  });
});

// login
const loginAdmin = catchAsync(async (req, res) => {
  const result = await AdminService.loginAdmin(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successful',
    data: result,
  });
});

export const AdminController = {
  createAdmin,
  getAdmin,
  loginAdmin,
};
