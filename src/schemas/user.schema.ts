import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type ProfileDocument = Profile & Document;
@Schema()
export class Profile {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true })
  age: number;
  @Prop()
  phoneNumber: string;
  @Prop({ required: true })
  address: string;
}
export const ProfileSchema = SchemaFactory.createForClass(Profile);
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop({ required: true, unique: true })
  emailAddress: string;

  @Prop()
  password?: string;

  @Prop({
    enum: [
      'super-admin',
      'admin',
      'organization-owner',
      'organization-admin',
      'student',
      'teacher',
      'parent',
      'accounts',
    ],
    required: true,
  })
  role?: string;

  @Prop({ type: ProfileSchema })
  profile?: Profile;
}

export const UserSchema = SchemaFactory.createForClass(User);
