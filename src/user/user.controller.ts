import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
  Request,
  SetMetadata,
  UsePipes,
  Param,
  ValidationPipe,
  Delete,
  Query,
} from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';

import { UserService } from './user.service';
import { JwtAuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/roles.guard';
import { UserDto } from '../dto/user.dto';
import { UserDocument } from '../schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private user: UserService) {}

  @Get('/admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  @SetMetadata('roles', ['super-admin', 'admin'])
  getUser(@Request() request): object {
    const { user } = request;
    const foundUser = this.user.findUserByEmailAddress({
      emailAddress: user.emailAddress,
    });
    return foundUser;
  }

  @Get('/profile')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getProfile(@Request() request): Promise<UserDto> {
    const { user } = request;
    const foundUser = this.user.findUserByEmailAddress({
      emailAddress: user.emailAddress,
    });
    return foundUser;
  }

  @Post('/create')
  async createUser(@Body() request): Promise<object> {
    try {
      const { emailAddress, password, role, profile } = request;
      const createdUserId = await this.user.createUser({
        emailAddress,
        password,
        role,
        profile,
      });
      return {
        createdUserId: createdUserId,
      };
    } catch (e) {
      console.log(e);
      throw new HttpException('Forbidden', HttpStatus.CONFLICT);
    }
  }

  @Get(':id')
  async getUsers(@Param('id') id: string) {
    const user = await this.user.getUserWithOrganizationAndCampuses(id);
    return user;
  }

  @Get(':emailAddress')
  async findUserByEmail(@Param('emailAddress') emailAddress: string) {
    return this.user.findUserByEmailAddress({ emailAddress });
  }

  @Get('id/:id')
  async findOne(@Param('id') id: string) {
    return this.user.findOne(id);
  }
  /* @Get()
  async getAllUser(@Query() query: ExpressQuery): Promise<UserDocument[]> {
    return this.user.getAllUser(query);
  }*/
  @Get()
  async findAll() {
    return this.user.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.user.remove(id);
  }

  /* @Post('/file')
  @UseInterceptors(multerUpload())
  handleUpload(@UploadedFile() file: Express.Multer.File) {
    console.log('file', file);
    return 'File upload API';
  }

  @Post('/fileUpload')
  @UseInterceptors()
  fileUpload(@UploadedFile() file: Express.Multer.File) {
    return 'File upload success';
  }*/
  // For S3 bucket code
  // @Post('/upload')
  // @UseInterceptors(multerUpload())
  // async handleUpload(
  //   @UploadedFile() file: Express.Multer.File,
  // ): Promise<string> {
  //   console.log('Uploaded file:', file);
  //   return 'File uploaded successfully';
  // }
}
