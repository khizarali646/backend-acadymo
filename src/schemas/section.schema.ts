import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Class } from './class.schema';
import * as mongoose from 'mongoose';
import { Subject } from './subject.schema';

export type SectionDocument = Section & Document;

@Schema()
export class Section {
  @Prop({ required: true, unique: true })
  sectionId: string;

  @Prop({ required: true })
  sectionName: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }] })
  classId?: Class;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }] })
  subjectId?: Subject[];
}

export const sectionSchema = SchemaFactory.createForClass(Section);
