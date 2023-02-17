import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UpcomingEventDocument,
  UpcomingEvents,
} from '../schemas/upcoming-events.schema';
import { UpcomingEventDto } from '../dto/upcoming-event.dto';

@Injectable()
export class UpcomingEventService {
  constructor(
    @InjectModel(UpcomingEvents.name)
    private UpcomingModel: Model<UpcomingEventDocument>,
  ) {}

  async create(
    createUpcomingDto: UpcomingEventDto,
  ): Promise<UpcomingEventDocument> {
    try {
      const createdUpcomingEvent = new this.UpcomingModel(createUpcomingDto);
      return await createdUpcomingEvent.save();
    } catch (e) {
      throw new HttpException(
        'createdUpcomingEvent already stored',
        HttpStatus.CONFLICT,
      );
    }
  }
  async findOne(id: string): Promise<UpcomingEventDocument> {
    return this.UpcomingModel.findById(id);
  }
  async findAll(): Promise<UpcomingEventDocument[]> {
    return this.UpcomingModel.find().exec();
  }
  async update(
    id: string,
    updateUpcomingDto: UpcomingEventDto,
  ): Promise<UpcomingEventDocument> {
    return this.UpcomingModel.findByIdAndUpdate(id, updateUpcomingDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<UpcomingEventDocument> {
    return this.UpcomingModel.findByIdAndRemove(id).exec();
  }
}
