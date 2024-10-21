import { Admin } from './admin.model';
import bcrypt from 'bcrypt';

const createAdminIntoDB = async (payload: any) => {
  const hashedPassword = await bcrypt.hash(payload.password, 10);
  const result = await Admin.create({ ...payload, password: hashedPassword });
  return result;
};

const getAdminFormDB = async (id: string) => {
  const result = await Admin.findById(id);
  return result;
};

// New function for login
const loginAdmin = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;

  // Find the admin by email
  const admin = await Admin.findOne({ email });

  console.log(admin);
  if (!admin) {
    throw new Error('Invalid email or password');
  }

  // Check if the password matches
  const isPasswordMatch = await bcrypt.compare(password, admin.password);
  console.log(isPasswordMatch);
  if (!isPasswordMatch) {
    throw new Error('Invalid email or password');
  }

  return admin;
};

export const AdminService = {
  createAdminIntoDB,
  getAdminFormDB,
  loginAdmin,
};
