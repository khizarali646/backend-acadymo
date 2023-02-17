import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CampusAdmin, AdminDocument } from '../schemas/admin.schema';
import { AdminDto } from '../dto/admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(CampusAdmin.name)
    private readonly AdminModel: Model<AdminDocument>,
  ) {}

  async create(createAdminDto: AdminDto): Promise<AdminDocument> {
    try {
      const createdAdmin = new this.AdminModel(createAdminDto);
      return await createdAdmin.save();
    } catch (e) {
      throw new HttpException('Admin Already Exists', HttpStatus.CONFLICT);
    }
  }

  async findOne(id: string): Promise<AdminDocument> {
    return this.AdminModel.findById(id).populate('CampusID');
    // return this.AdminModel.findOne({ _id: id }).exec();
  }

  async findAll(): Promise<AdminDocument[]> {
    return this.AdminModel.find().exec();
  }
  async update(id: string, updateAdminDto: AdminDto): Promise<AdminDocument> {
    return this.AdminModel.findByIdAndUpdate(id, updateAdminDto);
  }
  async remove(id: string): Promise<AdminDocument> {
    return this.AdminModel.findByIdAndRemove(id);
  }
}
