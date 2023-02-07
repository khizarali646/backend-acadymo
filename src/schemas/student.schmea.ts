import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true, unique: true })
  studentId: number;

  @Prop({ required: true })
  studentName: string;

  @Prop()
  address?: string;

  @Prop({ required: true, unique: true })
  emailAddress: string;

  @Prop()
  password?: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Class' })
  class: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Parent' })
  parentId: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
