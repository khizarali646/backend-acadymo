import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { User } from './user.schema';
import * as mongoose from 'mongoose';
import { Campus } from './campus.schema';

export type OrganizationDocument = Organization & Document;

@Schema()
export class Organization {
  @Prop({ required: true, unique: true })
  organizationName: string;

  @Prop({ required: true })
  organizationAddress: string;

  @Prop()
  noOfCampus: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  userId: User;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Campus' }] })
  campusId: Campus[];
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
