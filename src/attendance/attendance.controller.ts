import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceDto } from '../dto/attendance.dto';
import { AttendanceDocument } from '../schemas/attendance.schema';

@Controller('attendance')
export class AttendanceController {
  constructor(private AttendanceService: AttendanceService) {}
  @Post('/create')
  async create(
    @Body() createAttendanceDto: AttendanceDto,
  ): Promise<AttendanceDocument> {
    return this.AttendanceService.create(createAttendanceDto);
  }
  @Get()
  async findAll(): Promise<AttendanceDocument[]> {
    return this.AttendanceService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AttendanceDocument> {
    return this.AttendanceService.findOne(id);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAttendanceDto: AttendanceDto,
  ): Promise<AttendanceDocument> {
    return this.AttendanceService.update(id, updateAttendanceDto);
  }
  @Delete(':id')
  async remove(id: string): Promise<AttendanceDocument> {
    return this.AttendanceService.remove(id);
  }
}
