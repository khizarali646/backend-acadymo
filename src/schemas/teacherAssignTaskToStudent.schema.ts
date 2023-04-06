import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

export type TeacherAssignTaskDocument = AssignTask & Document;

@Schema()
export class AssignTask {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  teacherId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  studentId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Task' })
  taskId: Types.ObjectId;
}

export const TeacherAssignTaskSchema = SchemaFactory.createForClass(AssignTask);
