import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Task, TaskDocument } from 'src/schemas/task.schema';

@Injectable()
export class StudentSearchService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}
  async studentSearch(
    query: string,
  ): Promise<{ users: User[]; tasks: Task[] }> {
    const userResults = await this.userModel.find({
      $or: [
        { 'profile.firstName': { $regex: query, $options: 'i' } },
        { 'profile.lastName': { $regex: query, $options: 'i' } },
        // { 'profile.rollNo': { $regex: /^\d+$/, $options: 'i' } },
      ],
    });
    const tasksResult = await this.taskModel.find({
      title: { $regex: query, $options: 'i' },
    });
    return {
      users: userResults,
      tasks: tasksResult,
    };
  }
}
