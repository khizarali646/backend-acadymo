import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async findUserByEmailAddress({ emailAddress }): Promise<UserDto> {
    try {
      return this.model.findOne({ emailAddress: emailAddress }).lean();
    } catch (e) {
      throw new HttpException(
        'Unable to find user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async createUser({ emailAddress, password, role, profile }): Promise<string> {
    const createdUser = await this.model.create({
      emailAddress: emailAddress,
      password: await bcrypt.hash(password, 10),
      role: role,
      profile: profile,
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
    try {
      return await this.model.find().exec();
    } catch (e) {
      throw new HttpException(
        'Unable to find user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string): Promise<UserDocument> {
    try {
      return await this.model.findById(id).select({ password: 0 });
    } catch (e) {
      throw new HttpException(
        'Unable to find user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async update(id: string, updateDto: UserDto): Promise<UserDocument> {
    try {
      return await this.model.findByIdAndUpdate(id, updateDto);
    } catch (e) {
      throw new HttpException(
        'Unable to update user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async remove(id: string): Promise<UserDocument> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    return this.model.findByIdAndDelete(id);
  }
}
