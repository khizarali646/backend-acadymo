import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './student.dto';
import { StudentDocument } from '../schemas/student.schmea';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('create')
  async create(@Body() studentDto: StudentDto) {
    return await this.studentService.create(studentDto);
  }

  @Get()
  async findAll() {
    return this.studentService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StudentDocument> {
    return this.studentService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: StudentDto,
  ): Promise<StudentDto> {
    return this.studentService.update(id, updateStudentDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<StudentDocument> {
    return this.studentService.remove(id);
  }
}
