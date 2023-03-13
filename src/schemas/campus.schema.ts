import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Organization } from './organization.schema';
import { Class } from './class.schema';
import * as mongoose from 'mongoose';

export type CampusDocument = Campus & Document;

@Schema()
export class Campus {
  @Prop({ required: true })
  campusName: string;

  @Prop({ required: true })
  campusAddress: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Organization' })
  organizationId: Organization;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }] })
  classId: Class;
}

export const CampusSchema = SchemaFactory.createForClass(Campus);
