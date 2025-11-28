import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/RegisterUserDto';
import { SignInUserDto } from './dto/SIgnInUserDto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/User.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  // 1. Inject the Mongoose Model that was registered in AuthModule
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async registerUser(registerUserDto: RegisterUserDto) {
    console.log('registering user', registerUserDto);
    // Create a new document instance
    const newUser = new this.userModel(registerUserDto);
    // Persist it – returns the saved document (with _id, timestamps, etc.)
    return newUser.save();
  }

  async signInUser(signInUserDto: SignInUserDto) {
    console.log('signing in user', signInUserDto);
    await Promise.resolve('User Signed In');
    return null;
  }
}
