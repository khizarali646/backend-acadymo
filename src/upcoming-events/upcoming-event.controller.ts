import { Body, Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { UpcomingEventService } from './upcoming-event.service';
import { UpcomingEventDto } from '../dto/upcoming-event.dto';
import { UpcomingEventDocument } from '../schemas/upcoming-events.schema';

@Controller('upcoming-events')
export class UpcomingEventController {
  constructor(private readonly UpcomingEventService: UpcomingEventService) {}
  @Post('/create')
  async create(
    @Body()
    createUpcomingEventDto: UpcomingEventDto,
  ): Promise<UpcomingEventDocument> {
    return this.UpcomingEventService.create(createUpcomingEventDto);
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UpcomingEventDto> {
    return this.UpcomingEventService.findOne(id);
  }
  @Get() findAll() {
    return this.UpcomingEventService.findAll();
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUpcomingDto: UpcomingEventDto,
  ): Promise<UpcomingEventDocument> {
    return this.UpcomingEventService.update(id, updateUpcomingDto);
  }
  @Delete(':id')
  async remove(id: string): Promise<UpcomingEventDocument> {
    return this.UpcomingEventService.remove(id);
  }
}
