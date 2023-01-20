import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const UserSchema = SchemaFactory.createForClass(User);
