import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
  @Prop({ required: true, unique: true })
  emailAddress: string;

  @Prop()
  password?: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Campus' })
  CampusID: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);