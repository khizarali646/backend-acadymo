import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assign, AssignDocument } from '../schemas/assignTo';
import { AssignToDto } from '../dto/assignTo';

@Injectable()
export class AssignToService {
  constructor(
    @InjectModel(Assign.name) readonly AssignModel: Model<AssignDocument>,
  ) {}
  /*  async assignTeacherToClass(
    classId: string,
    teacherId: string,
  ): Promise<Assign> {
    const existingAssign = await this.AssignModel.findOne({
      teacherId: teacherId,
    });
    if (existingAssign) {
      throw new BadRequestException('Teacher is already assigned to a class');
    }

    const assign = await this.AssignModel.findOneAndUpdate(
      { classId: classId },
      { teacherId: teacherId },
      { new: true },
    ).populate('classId', 'className');

    return assign;
  }*/

  async assignTeacherToClass(
    classId: string,
    teacherId: string,
  ): Promise<Assign> {
    const existingAssign = await this.AssignModel.findOne({
      TeacherId: teacherId,
    });
    if (existingAssign) {
      throw new BadRequestException('Teacher is already assigned to a class');
    }

    const assign = await this.AssignModel.findOneAndUpdate(
      { ClassId: classId },
      { TeacherId: teacherId },
    );

    return assign;
  }

  async assignClass(
    classId: string,
    teacherId: string,
  ): Promise<AssignDocument> {
    const teacherAssignClass = await this.AssignModel.findOneAndUpdate(
      { classId: classId },
      { teacherId: teacherId },
      { new: true, upsert: true },
    )
      .populate('classId')
      .populate('teacherId');
    return teacherAssignClass;
  }
}
