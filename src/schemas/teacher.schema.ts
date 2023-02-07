import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

// export type ProfileDocument = Profile & Document;
//
// @Schema()
// export class Profile {
//   @Prop({ required: true, unique: true })
//   emailAddress: string;
//
//   @Prop({ required: true })
//   username: string;
//
//   @Prop({ required: true })
//   password: string;
// }
//
// export const ProfileSchema = SchemaFactory.createForClass(Profile);

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher {
  @Prop({ required: true, unique: true })
  teacherId: number;

  @Prop({ required: true })
  teacherName: string;

  @Prop({ required: true, unique: true })
  emailAddress: string;

  @Prop()
  password?: string;

  @Prop({ required: true })
  contactNo: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Class' })
  classes: string[];

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Admin' })
  addedBy: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
