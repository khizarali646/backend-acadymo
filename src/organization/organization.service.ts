import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Organization,
  OrganizationDocument,
} from '../schemas/organization.schema';
import { OrganizationDto } from '../dto/organization.dto';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectModel(Organization.name)
    private organizationModel: Model<OrganizationDocument>,
  ) {}

  async create(organization: OrganizationDocument): Promise<OrganizationDto> {
    try {
      const createdOrganization = new this.organizationModel(organization);
      return await createdOrganization.save();
    } catch (e) {
      throw new HttpException(
        'Organization ID Already Exists',
        HttpStatus.CONFLICT,
      );
    }
  }

  async findAll(): Promise<OrganizationDto[]> {
    return await this.organizationModel.find().exec();
  }

  // async findOne(id: string): Promise<OrganizationDto> {
  //   return await this.organizationModel.findOne({ OrganizationID: id }).exec();
  // }
  async findOne(id: string): Promise<Organization> {
    return await this.organizationModel
      .findOne({ _id: id })
      .populate('userId', '_id emailAddress role ')
      .populate({
        path: 'campusId',
        populate: {
          path: 'class',
          model: 'Class',
        },
      })
      .exec();
  }

  async remove(id: string): Promise<OrganizationDto> {
    return await this.organizationModel
      .findOneAndDelete({ OrganizationID: id })
      .exec();
  }
}
