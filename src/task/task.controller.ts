import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TaskDto } from '../dto/task.dto';
import { TaskService } from './task.service';
import { TaskDocument } from '../schemas/task.schema';

@Controller('task')
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}

  @Post('/create')
  async create(@Body() createTaskDto: TaskDto): Promise<TaskDocument> {
    return this.TaskService.create(createTaskDto);
  }

  @Get('/list')
  async findAll(): Promise<TaskDocument[]> {
    return this.TaskService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TaskDocument> {
    return this.TaskService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: TaskDto,
  ): Promise<TaskDocument> {
    return this.TaskService.update(id, updateTaskDto);
  }
  @Delete(':id')
  async remove(id: string): Promise<TaskDocument> {
    return this.TaskService.remove(id);
  }
}
