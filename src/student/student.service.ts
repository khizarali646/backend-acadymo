import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from '../schemas/student.schmea';
import { StudentDto } from './student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private readonly StudentModel: Model<StudentDocument>,
  ) {}

  async create(createStudentDto: StudentDto): Promise<StudentDocument> {
    try {
      const createdStudent = new this.StudentModel(createStudentDto);
      return await createdStudent.save();
    } catch (e) {
      throw new HttpException('Student Already Exists', HttpStatus.CONFLICT);
    }
  }

  async findOne(id: string): Promise<StudentDocument> {
    return this.StudentModel.findById(id);
  }

  async findAll(): Promise<StudentDocument[]> {
    return this.StudentModel.find().exec();
  }

  async update(id: string, updateStudentDto: StudentDto): Promise<StudentDto> {
    return this.StudentModel.findByIdAndUpdate(id, updateStudentDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<StudentDocument> {
    return this.StudentModel.findByIdAndRemove(id).exec();
  }
}
