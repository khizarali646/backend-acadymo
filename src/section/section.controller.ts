import { Controller, Body, Get, Post } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionDto } from '../dto/section.dto';

@Controller('section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Post('/create')
  async create(@Body() createSectionDto: SectionDto) {
    return this.sectionService.create(createSectionDto);
  }
  @Get()
  async findAll() {
    return this.sectionService.findAll();
  }
}
