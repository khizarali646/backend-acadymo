import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  AssignTask,
  TeacherAssignTaskDocument,
} from '../schemas/teacherAssignTaskToStudent.schema';

@Injectable()
export class TeacherAssignTaskToStudentService {
  constructor(
    @InjectModel(AssignTask.name)
    readonly AssignTaskModel: Model<TeacherAssignTaskDocument>,
  ) {}

  async assignTask(
    taskId: string,
    studentId: string,
  ): Promise<TeacherAssignTaskDocument> {
    try {
      const teacherAssignTask = await this.AssignTaskModel.findOneAndUpdate(
        { taskId: taskId },
        { studentId: studentId },
        { new: true, upsert: true },
      )
        .populate('taskId')
        .populate('studentId');
      return teacherAssignTask;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'Task is already assigned to a student',
        HttpStatus.CONFLICT,
      );
    }
  }

  async teacherAssignMultipleTask(
    taskId: string,
    studentId: string,
  ): Promise<TeacherAssignTaskDocument> {
    try {
      const teacherAssignMultipleTask =
        await this.AssignTaskModel.findOneAndUpdate(
          { taskId: taskId },
          { studentId: studentId },
          { new: true, upsert: true },
        )
          .populate('taskId')
          .populate('studentId');
      return teacherAssignMultipleTask;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'Teacher is already assigned to a class',
        HttpStatus.CONFLICT,
      );
    }
  }
}
