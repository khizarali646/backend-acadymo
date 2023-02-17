import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  NotificationDocument,
  Notification,
} from '../schemas/notification.schema';
import { NotificationDto } from '../dto/notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private NotificationModel: Model<NotificationDocument>,
  ) {}
  async create(
    createNotificationDate: NotificationDto,
  ): Promise<NotificationDocument> {
    try {
      const createdNotification = new this.NotificationModel(
        createNotificationDate,
      );
      return await createdNotification.save();
    } catch (e) {
      throw new HttpException('Notification', HttpStatus.CONFLICT);
    }
  }

  async findOne(id: string): Promise<NotificationDocument> {
    return this.NotificationModel.findById(id).exec();
  }
  async findAll(): Promise<NotificationDocument[]> {
    return this.NotificationModel.find().exec();
  }
  async update(
    id: string,
    updateNotificationDto: NotificationDto,
  ): Promise<NotificationDocument> {
    return this.NotificationModel.findByIdAndUpdate(id, updateNotificationDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<NotificationDocument> {
    return this.NotificationModel.findByIdAndRemove(id);
  }
}
