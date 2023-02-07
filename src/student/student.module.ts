import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from '../schemas/student.schmea';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [StudentService],
  controllers: [StudentController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
})
export class StudentModule {}
