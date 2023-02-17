import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationDto } from '../dto/notification.dto';
import { NotificationDocument } from '../schemas/notification.schema';

@Controller('notification')
export class NotificationController {
  constructor(private NotificationService: NotificationService) {}

  @Post('/create')
  async create(
    @Body() createNotificationDto: NotificationDto,
  ): Promise<NotificationDocument> {
    return this.NotificationService.create(createNotificationDto);
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<NotificationDocument>{
    return this.NotificationService.findOne(id);
  }

  @Get()
  findAll() {
    return this.NotificationService.findAll();
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNotificationDto: NotificationDto,
  ): Promise<NotificationDto> {
    return this.NotificationService.update(id, updateNotificationDto);
  }
  @Delete(':id')
  async remove(id: string): Promise<NotificationDto> {
    return this.NotificationService.remove(id);
  }
}
