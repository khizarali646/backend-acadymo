import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TimetableDocument = Timetable & Document;
@Schema()
export class Timetable {
  @Prop({ unique: true })
  timetableId: string;

  @Prop({})
  timetableName: string;

  @Prop()
  class: string;

  @Prop()
  day: string;

  @Prop()
  time: number;
}

export const TimeTableSchema = SchemaFactory.createForClass(Timetable);
