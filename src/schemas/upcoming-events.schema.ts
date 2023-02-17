import { Document, SchemaTypes } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UpcomingEventDocument = UpcomingEvents & Document;

@Schema()
export class UpcomingEvents {
  @Prop({ required: true, unique: true })
  title: string;
  @Prop()
  startDate: Date;
  @Prop()
  endDate: Date;
  @Prop()
  location: string;
  @Prop()
  description: string;
}
export const UpcomingEventsSchema =
  SchemaFactory.createForClass(UpcomingEvents);
