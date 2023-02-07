import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type ParentDocument = Parent & Document;

@Schema()
export class Parent {
  @Prop({ required: true, unique: true })
  parentId: string;

  @Prop({ required: true })
  parentName: string;

  @Prop({ required: true, unique: true })
  emailAddress: string;

  @Prop()
  password?: string;

  @Prop()
  address?: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Student' })
  studentId: string;
}

export const ParentSchema = SchemaFactory.createForClass(Parent);
