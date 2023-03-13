import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section, SectionDocument } from '../schemas/section.schema';
import { SectionDto } from '../dto/section.dto';

export class SectionService {
  constructor(
    @InjectModel(Section.name) private sectionModel: Model<SectionDocument>,
  ) {}

  async create(createSectionDto: SectionDto): Promise<SectionDocument> {
    try {
      const createdSection = new this.sectionModel(createSectionDto);
      return await createdSection.save();
    } catch (e) {
      throw new HttpException(
        'Section already Registered',
        HttpStatus.CONFLICT,
      );
    }
  }

  async findAll(): Promise<SectionDocument[]> {
    return this.sectionModel.find().exec();
  }
}
