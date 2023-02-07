import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher, TeacherDocument } from '../schemas/teacher.schema';
import { TeacherDto } from './teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name)
    private readonly teacherModel: Model<TeacherDocument>,
  ) {}

  async create(createTeacherDto: TeacherDto): Promise<TeacherDocument> {
    try {
      const createdTeacher = new this.teacherModel(createTeacherDto);
      return await createdTeacher.save();
    } catch (e) {
      throw new HttpException('Teacher already register', HttpStatus.CONFLICT);
    }
  }

  async findAll(): Promise<TeacherDocument[]> {
    return this.teacherModel.find().exec();
  }
  async findOne(id: string): Promise<TeacherDocument> {
    return this.teacherModel.findById(id);
  }

  // async findOne(id: string): Promise<TeacherDocument> {
  //   return this.teacherModel.findById({ _id: id }).populate('addedBy').exec();
  // }
  async update(
    id: string,
    updateTeacherDto: TeacherDto,
  ): Promise<TeacherDocument> {
    return this.teacherModel
      .findByIdAndUpdate(id, updateTeacherDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<TeacherDocument> {
    return this.teacherModel.findByIdAndRemove(id).exec();
  }
}
