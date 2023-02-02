import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop({ required: true })
  FirstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  age: number;
}

export type UserDocument = User & Document;

@Schema()
export class User {
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

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Organization' })
  organizationID?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
