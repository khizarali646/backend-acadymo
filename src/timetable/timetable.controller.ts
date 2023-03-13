import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { TimetableDto } from '../dto/timetable.dto';
import { TimetableDocument } from '../schemas/timetable.schema';

@Controller('timetable')
export class TimetableController {
  constructor(private readonly timetableServices: TimetableService) {}
  @Post('create')
  async create(@Body() timetableDto: TimetableDto) {
    return this.timetableServices.create(timetableDto);
  }
  @Get()
  async findAll() {
    return this.timetableServices.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.timetableServices.findOne(id);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: TimetableDto,
  ): Promise<TimetableDocument> {
    return this.timetableServices.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.timetableServices.delete(id);
  }
}
