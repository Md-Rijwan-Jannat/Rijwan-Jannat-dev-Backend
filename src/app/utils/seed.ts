/* eslint-disable no-console */

import config from '../../config';
import { Admin } from '../module/Admin/admin.model';

export const seed = async () => {
  try {
    // Check admin is created
    const admin = await Admin.findOne({
      email: config.admin_email,
    });
    if (!admin) {
      await Admin.create({
        name: 'Md Rijwan Jannat',
        email: config.admin_email,
        password: config.admin_password,
      });
      console.log('Admin created successfully...');
      console.log('Seeding completed...');
    }
  } catch (error) {
    console.log('Error in seeding', error);
  }
};
