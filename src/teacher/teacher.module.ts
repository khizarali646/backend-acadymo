import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from '../schemas/teacher.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [TeacherService],
  controllers: [TeacherController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
  ],
})
export class TeacherModule {}
