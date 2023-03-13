import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TimetableDto } from '../dto/timetable.dto';
import { Timetable, TimetableDocument } from '../schemas/timetable.schema';

@Injectable()
export class TimetableService {
  constructor(
    @InjectModel(Timetable.name)
    private timeTableModel: Model<TimetableDocument>,
  ) {}
  async create(timeTableDto: TimetableDto): Promise<TimetableDocument> {
    try {
      const createdTimetable = new this.timeTableModel(timeTableDto);
      return await createdTimetable.save();
    } catch (e) {
      throw new HttpException('TimeTable Already Exists', HttpStatus.CONFLICT);
    }
  }

  async findAll(): Promise<TimetableDocument[]> {
    try {
      return await this.timeTableModel.find().exec();
    } catch (e) {
      throw new HttpException('Timetable not found', HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: string): Promise<TimetableDocument> {
    try {
      return await this.timeTableModel.findById(id);
    } catch (e) {
      throw new HttpException('Timetable not found', HttpStatus.NOT_FOUND);
    }
  }
  async update(
    id: string,
    updateDto: TimetableDto,
  ): Promise<TimetableDocument> {
    try {
      return await this.timeTableModel.findByIdAndUpdate(id, updateDto);
    } catch (e) {
      throw new HttpException('cannot update', HttpStatus.CONFLICT);
    }
  }

  async delete(id: string): Promise<TimetableDocument> {
    return this.timeTableModel.findByIdAndRemove(id).exec();
  }
}
