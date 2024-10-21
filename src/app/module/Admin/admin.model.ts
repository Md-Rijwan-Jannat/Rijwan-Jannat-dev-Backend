import { model, Schema } from 'mongoose';
import { AdminModel, TAdmin } from './admin.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

const AdminSchema = new Schema<TAdmin, AdminModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      default: config.admin_image,
    },
  },
  {
    timestamps: true,
  }
);

AdminSchema.pre('save', async function (next) {
  const Admin = this;
  // hashing password and save into DB
  Admin.password = await bcrypt.hash(
    Admin.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// set '' after saving password
AdminSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

AdminSchema.statics.isAdminExistsByCustomId = async function (id: string) {
  return await Admin.findOne({ id }).select('+password');
};

AdminSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

AdminSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const Admin = model<TAdmin, AdminModel>('Admin', AdminSchema);
