import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../user/user.schema';

export type OrganizationDocument = Organization & Document;

@Schema()
export class Organization {
  @Prop({ unique: true, required: true })
  organizationID: string;

  @Prop({ required: true })
  organizationName: string;

  @Prop({ required: true })
  organizationAddress: string;
  //
  // @Prop({ type: [String], required: true })
  // noOfCampus: string[];

  @Prop()
  noOfCampus: number;

  @Prop({ ref: 'User', required: true })
  owner: User;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
