import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop({ unique: true })
  subjectId: string;

  @Prop({})
  subjectName: string;

  @Prop({ unique: true })
  subjectCode: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Organization' })
  organizationId: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Class' })
  classId: string;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
