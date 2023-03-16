import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Section } from './section.schema';
import { Class } from './class.schema';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop({})
  subjectName: string;

  @Prop({ unique: true })
  subjectCode: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Section' }] })
  sectionId: Section;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }] })
  classId: Class;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }] })
  teacherId: string;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
