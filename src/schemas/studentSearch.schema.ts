import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';

export type StudentSearchDocument = StudentSearch & Document;

@Schema()
export class StudentSearch {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  studentName: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  rollNo: User;
}

export const StudentSearchSchema = SchemaFactory.createForClass(StudentSearch);
