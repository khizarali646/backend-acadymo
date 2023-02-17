import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attendance, AttendanceDocument } from '../schemas/attendance.schema';
import { AttendanceDto } from '../dto/attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectModel(Attendance.name)
    private AttendanceModel: Model<AttendanceDocument>,
  ) {}

  async create(
    createAttendanceDto: AttendanceDto,
  ): Promise<AttendanceDocument> {
    const createdAttendance = new this.AttendanceModel(createAttendanceDto);
    return createdAttendance.save();
  }
  // async find(): Promise<Attendance[]> {
  //   return await this.AttendanceModel.find().populate('studentId').exec();
  // }
  async findAll(): Promise<AttendanceDocument[]> {
    return await this.AttendanceModel.find().populate('studentId').exec();
  }
  async findOne(id: string): Promise<AttendanceDocument> {
    // return this.AttendanceModel.findById(id);
    return await this.AttendanceModel.findOne({ _id: id })
      .populate('studentId')
      .exec();
  }
  async update(
    id: string,
    updateAttendanceDto: AttendanceDto,
  ): Promise<AttendanceDocument> {
    return this.AttendanceModel.findByIdAndUpdate(id, updateAttendanceDto, {
      new: true,
    });
  }
  async remove(id: string): Promise<AttendanceDocument> {
    return this.AttendanceModel.findByIdAndRemove(id).exec();
  }
}
