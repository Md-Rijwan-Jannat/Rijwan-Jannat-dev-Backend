import { NextFunction } from 'express';
import { USER_ROLE } from '../module/Admin/admin.constants';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import { verifyToken } from '../utils/tokenGenerateFunction';
import { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import { Admin } from '../module/Admin/admin.model';

const Auth = (...requiredRoles: (keyof typeof USER_ROLE)[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);

    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    const decoded = verifyToken(
      token,
      config.jwt_secret as string
    ) as JwtPayload;

    const { id, role, email, iat } = decoded;

    // checking if the user is exist
    const admin = await Admin.findById(id);

    console.log(admin);

    if (!admin) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }

    if (requiredRoles && requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default Auth;
