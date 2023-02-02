import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CampusService } from './campus.service';
import { CampusDto } from './campus.dto';

@Controller('campus')
export class CampusController {
  constructor(private readonly campusService: CampusService) {}

  @Post('/create')
  async create(@Body() createCampusDto: CampusDto) {
    try {
      return this.campusService.create(createCampusDto);
    } catch (e) {
      throw new HttpException(
        'Organization ID Already Exists',
        HttpStatus.CONFLICT,
      );
    }
  }
  @Get()
  findAll() {
    return this.campusService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campusService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCampusDto: CampusDto) {
    return this.campusService.update(id, updateCampusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campusService.remove(id);
  }
}
