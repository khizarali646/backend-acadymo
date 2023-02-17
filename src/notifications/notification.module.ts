import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Notification,
  NotificationSchema,
} from '../schemas/notification.schema';

@Module({
  providers: [NotificationService],
  controllers: [NotificationController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Notification.name, schema: NotificationSchema },
    ]),
  ],
})
export class NotificationModule {}
