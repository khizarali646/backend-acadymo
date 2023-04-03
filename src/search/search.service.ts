import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class, ClassDocument } from '../schemas/class.schema';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Class.name) private classModel: Model<ClassDocument>,
  ) {}

  async search(query: string): Promise<{ users: User[]; classes: Class[] }> {
    const userResults = await this.userModel
      .find({
        $or: [
          { 'profile.firstName': { $regex: query, $options: 'i' } },
          { 'profile.lastName': { $regex: query, $options: 'i' } },
          { emailAddress: { $regex: query, $options: 'i' } },
        ],
      })
      .populate('organizationId');

    const classResults = await this.classModel
      .find({
        className: { $regex: query, $options: 'i' },
      })
      .populate('campusId')
      .populate('sectionId');
    return {
      users: userResults,
      classes: classResults,
    };
  }
}
