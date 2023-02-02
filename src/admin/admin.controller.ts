import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AdminService } from './admin.service';
import { AdminDto } from './admin.dto';

@Controller('campusAdmin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/create')
  async create(@Body() createAdminDto: AdminDto) {
    return this.adminService.create(createAdminDto);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }

  @Get()
  async findAll() {
    return this.adminService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, updateAdminDto: AdminDto) {
    return this.adminService.update(id, updateAdminDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.adminService.remove(id);
  }
}
