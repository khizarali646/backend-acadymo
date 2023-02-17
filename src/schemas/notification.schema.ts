import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;
@Schema()
export class Notification {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  date: Date;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
