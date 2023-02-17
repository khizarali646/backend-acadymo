import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Attendance, AttendanceSchema } from '../schemas/attendance.schema';

@Module({
  providers: [AttendanceService],
  controllers: [AttendanceController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Attendance.name, schema: AttendanceSchema },
    ]),
  ],
})
export class AttendanceModule {}
