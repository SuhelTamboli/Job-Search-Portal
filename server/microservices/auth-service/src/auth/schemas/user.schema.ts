import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// 1. Type that Mongoose will return (User + Mongo _id, __v, etc.)
export type UserDocument = User & Document;

// 2. Decorator marks this class as a Mongoose schema
@Schema({ timestamps: true }) // adds createdAt / updatedAt automatically
export class User {
  @Prop({ required: true, unique: true }) //Maps a class property to a MongoDB field.
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  role: 'RECRUITER' | 'JOBSEEKER';
}

// 3. Export the compiled schema so we can register it in a module
export const UserSchema = SchemaFactory.createForClass(User); //Turns the decorated class into a real Mongoose Schema object.
