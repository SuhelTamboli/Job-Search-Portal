import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/User.schema';

@Module({
  imports: [
    // 1. Register the User model **only inside this module**
    //Takes the compiled schema (UserSchema) and creates a Model named User
    //User.name → "User" (the collection name will be users by default).
    //Result: AuthService can now inject Model<UserDocument> and perform CRUD.
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
