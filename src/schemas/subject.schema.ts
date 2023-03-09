import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from "mongoose";

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop({})
  subjectId: string;

  @Prop({})
  subjectName: string;

  @Prop({})
  subjectCode: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Organization' })
  organizationId: string;

  @Prop({ type: Types.ObjectId, ref: 'Class' })
  classId: Types.ObjectId;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
