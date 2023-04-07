import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Class } from './class.schema';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({})
  description: string;

  @Prop({})
  assignTo: string;

  @Prop({})
  startDate: Date;

  @Prop({})
  endDate: Date;

  @Prop({})
  image: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Class' })
  classId: Types.ObjectId;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
