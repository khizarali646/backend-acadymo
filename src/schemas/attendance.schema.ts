import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';

export type AttendanceDocument = Attendance & Document;
@Schema()
export class Attendance {
  @Prop({ required: true })
  attendanceId: string;
  @Prop({})
  name: string;
  @Prop({})
  rollNo: string;
  @Prop()
  date: string;
  @Prop({ enum: ['present', 'absent', 'late'] })
  attendanceStatus: string;
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Student' })
  studentId?: string;
}
export const AttendanceSchema = SchemaFactory.createForClass(Attendance);
