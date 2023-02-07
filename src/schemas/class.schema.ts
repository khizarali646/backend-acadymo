import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type ClassDocument = Class & Document;

@Schema()
export class Class {
  @Prop({ required: true, unique: true })
  classId: string;

  @Prop({ required: true })
  className: string;

  @Prop({ required: true })
  subjectName: string;

  @Prop({ required: true })
  noOfStudent: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Teacher' })
  teacherId: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Student' })
  studentId: string;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
