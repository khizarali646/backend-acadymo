import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentDto } from './parent.dto';
import { ParentDocument } from '../schemas/parent.schema';

@Controller('parent')
export class ParentController {
  constructor(private readonly ParentService: ParentService) {}
  @Post('/create')
  async create(@Body() createParentDto: ParentDto): Promise<ParentDocument> {
    return await this.ParentService.create(createParentDto);
  }
  @Get()
  async findAll() {
    return this.ParentService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.ParentService.findOne(id);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateParentDto: ParentDto,
  ): Promise<ParentDocument> {
    return this.ParentService.update(id, updateParentDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ParentDocument> {
    return this.ParentService.remove(id);
  }
}
