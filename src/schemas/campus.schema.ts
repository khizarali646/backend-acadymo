import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type CampusDocument = Campus & Document;

@Schema()
export class Campus {
  @Prop({ unique: true, required: true })
  campusId: string;

  @Prop({ required: true })
  campusName: string;

  @Prop({ required: true })
  campusAddress: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Organization' })
  OrganizationID: string;
}

export const CampusSchema = SchemaFactory.createForClass(Campus);
