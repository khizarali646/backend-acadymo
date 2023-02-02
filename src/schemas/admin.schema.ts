import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';

export type AdminDocument = CampusAdmin & Document;

@Schema()
export class CampusAdmin {
  @Prop({ required: true, unique: true })
  adminId: string;
  @Prop({ required: true })
  emailAddress: string;

  @Prop()
  password: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Campus' })
  CampusID: string;
}

export const AdminSchema = SchemaFactory.createForClass(CampusAdmin);
