import { Module } from '@nestjs/common';
import { TeacherAssignTaskToStudentService } from './teacher-assign-task-to-student.service';
import { TeacherAssignTaskToStudentController } from './teacher-assign-task-to-student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import {
  AssignTask,
  TeacherAssignTaskSchema,
} from '../schemas/teacherAssignTaskToStudent.schema';

@Module({
  providers: [TeacherAssignTaskToStudentService],
  controllers: [TeacherAssignTaskToStudentController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: AssignTask.name, schema: TeacherAssignTaskSchema },
    ]),
  ],
})
export class TeacherAssignTaskToStudentModule {}
