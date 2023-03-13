import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Campus, CampusDocument } from '../schemas/campus.schema';
import { Model } from 'mongoose';
import { CampusDto } from '../dto/campus.dto';

@Injectable()
export class CampusService {
  constructor(
    @InjectModel(Campus.name)
    private readonly campusModel: Model<CampusDocument>,
  ) {}

  async create(createCampusDto: CampusDto): Promise<CampusDocument> {
    try {
      const createCampus = new this.campusModel(createCampusDto);
      return await createCampus.save();
    } catch (e) {
      throw new HttpException('Campus ID Already Exists', HttpStatus.CONFLICT);
    }
  }
  // async findAll(): Promise<CampusDocument[]> {
  //   return this.campusModel.find().exec();
  // }
  // async findOne(id: string): Promise<CampusDocument> {
  //   return this.campusModel.findOne({ _id: id }).exec();
  // }
  async findOrganization(id: string): Promise<CampusDocument> {
    return this.campusModel.findById(id).populate({
      path: 'organizationId',
      populate: { path: 'userId' },
    });
  }
  async findAll(): Promise<CampusDocument[]> {
    return await this.campusModel.find().exec();
  }
  async findOne(id: string): Promise<CampusDocument> {
    return await this.campusModel
      .findOne({ _id: id })
      .populate('organization')
      .exec();
  }

  async update(
    id: string,
    @Body()
    updateCampusDto: CampusDto,
  ): Promise<CampusDocument> {
    return this.campusModel.findByIdAndUpdate(id, updateCampusDto);
  }

  async remove(id: string): Promise<CampusDocument> {
    return this.campusModel.findByIdAndRemove(id);
  }
}
