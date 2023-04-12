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
  async findAll(): Promise<TeacherAssignTaskDocument[]> {
    const teacherAssignTasks = await this.AssignTaskModel.find()
      .populate('taskId')
      .populate('studentId');
    return teacherAssignTasks;
  }

  async findTaskById(taskId: string): Promise<TeacherAssignTaskDocument> {
    const teacherAssignTask = await this.AssignTaskModel.findById(taskId)
      .populate('taskId')
      .populate('studentId');
    if (!teacherAssignTask) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return teacherAssignTask;
  }

  async getTasksByStudentId(studentId: string): Promise<AssignTask[]> {
    const tasks = await this.AssignTaskModel.find({ studentId })
      .populate('taskId')
      .populate('studentId')
      .exec();

    return tasks;
  }

  async getTaskById(taskId: string): Promise<AssignTask> {
    const task = await this.AssignTaskModel.findById(taskId)
      .populate('taskId')
      .populate('studentId')
      .exec();

    return task;
  }
}
