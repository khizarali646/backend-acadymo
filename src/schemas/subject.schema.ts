import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop({ required: true, unique: true })
  SubjectID: string;

  @Prop({ required: true })
  SubjectName: string;

  @Prop({ ref: 'Class' })
  ClassID: string;

  @Prop({ ref: 'Teacher' })
  TeacherID: string;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
