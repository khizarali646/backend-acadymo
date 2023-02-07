import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async findUserByEmailAddress({ emailAddress }): Promise<UserDto> {
    return this.model.findOne({ emailAddress: emailAddress }).lean();
  }

  async createUser({ emailAddress, password, role }): Promise<string> {
    const createdUser = await this.model.create({
      emailAddress: emailAddress,
      password: await bcrypt.hash(password, 10),
      role: role,
    });
    return createdUser._id;
  }

  // async createUserWithPhone({ phoneNumber, password, role }): Promise<string> {
  //   const createdUser = await this.model.create({
  //     phoneNumber: phoneNumber,
  //     password: await bcrypt.hash(password, 10),
  //     role: role,
  //   });
  //   return createdUser._id;
  // }
  async findAll(): Promise<UserDocument[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<UserDocument> {
    return this.model.findById(id);
  }
  async update(id: string, updateDto: UserDto): Promise<UserDocument> {
    return this.model.findByIdAndUpdate(id, updateDto);
  }
  async remove(id: string): Promise<UserDocument> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    return this.model.findByIdAndDelete(id);
  }
}
