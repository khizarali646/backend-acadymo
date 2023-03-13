import { Module } from '@nestjs/common';
import { TimetableController } from './timetable.controller';
import { TimetableService } from './timetable.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Timetable, TimeTableSchema } from '../schemas/timetable.schema';

@Module({
  controllers: [TimetableController],
  providers: [TimetableService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Timetable.name,
        schema: TimeTableSchema,
      },
    ]),
  ],
})
export class TimetableModule {}
