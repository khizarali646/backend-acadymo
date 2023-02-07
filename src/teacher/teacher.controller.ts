import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherDto } from './teacher.dto';
import { TeacherDocument } from '../schemas/teacher.schema';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post('/create')
  async create(@Body() createTeacherDto: TeacherDto) {
    return await this.teacherService.create(createTeacherDto);
  }

  @Get()
  async findAll() {
    return this.teacherService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<TeacherDocument> {
    return this.teacherService.findOne(id);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() createUpdateDto: TeacherDto,
  ): Promise<TeacherDocument> {
    return this.teacherService.update(id, createUpdateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<TeacherDocument> {
    return this.teacherService.delete(id);
  }
}
