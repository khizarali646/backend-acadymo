import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parent, ParentDocument } from '../schemas/parent.schema';
import { ParentDto } from './parent.dto';

@Injectable()
export class ParentService {
  constructor(
    @InjectModel(Parent.name) private ParentModel: Model<ParentDocument>,
  ) {}

  async create(createParentDto: ParentDto): Promise<ParentDocument> {
    try {
      const createdParent = new this.ParentModel(createParentDto);
      return await createdParent.save();
    } catch (e) {
      throw new HttpException('Parent Already Exists', HttpStatus.CONFLICT);
    }
  }
  async findOne(id: string): Promise<ParentDocument> {
    return this.ParentModel.findById(id);
  }
  async findAll(): Promise<ParentDocument[]> {
    return this.ParentModel.find().exec();
  }
  async update(
    id: string,
    updateParentDto: ParentDto,
  ): Promise<ParentDocument> {
    return this.ParentModel.findByIdAndUpdate(id, updateParentDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<ParentDocument> {
    return this.ParentModel.findByIdAndRemove(id);
  }
}
