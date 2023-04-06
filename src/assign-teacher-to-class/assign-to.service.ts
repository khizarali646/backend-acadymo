import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assign, AssignDocument } from '../schemas/assignTeacherToClass.schema';

@Injectable()
export class AssignToService {
  constructor(
    @InjectModel(Assign.name) readonly AssignModel: Model<AssignDocument>,
  ) {}

  async assignClass(
    classId: string,
    teacherId: string,
  ): Promise<AssignDocument> {
    try {
      const teacherAssignClass = await this.AssignModel.findOneAndUpdate(
        { classId: classId },
        { teacherId: teacherId },
        { new: true, upsert: true },
      )
        .populate('classId')
        .populate('teacherId');
      return teacherAssignClass;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'Teacher is already assigned to a class',
        HttpStatus.CONFLICT,
      );
    }
  }

  async asignClassess(
    classId: string,
    teacherId: string,
  ): Promise<AssignDocument> {
    try {
      const teacherAssignClass = await this.AssignModel.findOneAndUpdate(
        { classId: classId },
        { teacherId: teacherId },
        { new: true, upsert: true },
      )
        .populate('classId')
        .populate('teacherId');
      return teacherAssignClass;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'Teacher is already assigned to a class',
        HttpStatus.CONFLICT,
      );
    }
  }

  async getAssignedClassesForTeacher(
    teacherId: string,
  ): Promise<AssignDocument[]> {
    return this.AssignModel.find({ teacherId: teacherId }).populate('classId');
  }

  async delete(teacherId: string): Promise<AssignDocument> {
    return this.AssignModel.findByIdAndRemove(teacherId).exec();
  }
}
