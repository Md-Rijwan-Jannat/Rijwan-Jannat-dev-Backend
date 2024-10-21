import { Model } from 'mongoose';

export interface TAdmin {
  name: string;
  email: string;
  password: string;
  role: boolean;
  image: string;
}

export interface AdminModel extends Model<TAdmin> {
  //instance methods for checking if the Admin exist
  isAdminExistsByCustomId(id: string): Promise<TAdmin>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}
