import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { TaskDto } from '../dto/task.dto';


@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private TaskModel: Model<TaskDocument>) {}

  async create(createTaskDto: TaskDto): Promise<TaskDocument> {
    const createdTask = new this.TaskModel(createTaskDto);
    return createdTask.save();
  }

  async findOne(id: string): Promise<TaskDocument> {
    return this.TaskModel.findById(id).exec();
  }
  async findAll(): Promise<TaskDocument[]> {
    return this.TaskModel.find().exec();
  }
  async update(id: string, updateTaskDto: TaskDto): Promise<TaskDocument> {
    return this.TaskModel.findByIdAndUpdate(id, updateTaskDto, {
      new: true,
    });
  }
  async remove(id: string): Promise<TaskDocument> {
    return this.TaskModel.findByIdAndRemove(id).exec();
  }
}
