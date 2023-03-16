import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ClassDto } from './class.dto';
import { ClassService } from './class.service';
import { ClassDocument } from '../schemas/class.schema';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post('/create')
  async create(@Body() createClassDto: ClassDto) {
    try {
      return this.classService.create(createClassDto);
    } catch (e) {
      console.log(e);
    }
  }

  @Get()
  async findAll() {
    return this.classService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ClassDocument> {
    return this.classService.findOne(id);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClassDto: ClassDto,
  ): Promise<ClassDocument> {
    return this.classService.update(id, updateClassDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ClassDocument> {
    return this.classService.remove(id);
  }
}
