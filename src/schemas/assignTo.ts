import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types, Document } from 'mongoose';
import { Class } from './class.schema';

export type AssignDocument = Assign & Document;
@Schema()
export class Assign {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }] })
  classId: Types.ObjectId;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  teacherId: Types.ObjectId;
}
export const AssignSchema = SchemaFactory.createForClass(Assign);

export const AssignModel = mongoose.model<AssignDocument>(
  'Assign',
  AssignSchema,
);
