import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { OrganizationDocument } from '../schemas/organization.schema';
import { OrganizationService } from './organization.service';
import { OrganizationDto } from '../dto/organization.dto';

@Controller('organization')
export class OrganizationController {
  constructor(private organizationService: OrganizationService) {}

  @Post('/create')
  async create(
    @Body() organization: OrganizationDocument,
  ): Promise<OrganizationDto> {
    return this.organizationService.create(organization);
  }

  @Get()
  async findAll(): Promise<OrganizationDto[]> {
    return this.organizationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<OrganizationDto> {
    return this.organizationService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<OrganizationDto> {
    return this.organizationService.remove(id);
  }
}
