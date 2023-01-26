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
} from '@nestjs/common';

import { UserService } from './user.service';
import { JwtAuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/roles.guard';

@Controller('user')
export class UserController {
  constructor(private user: UserService) {}

  @Get('test')
  testEndpoint(): string {
    return 'Ok';
  }

  @Get('/super-admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  @SetMetadata('roles', ['super-admin'])
  getUser(@Request() request): object {
    const { user } = request;
    const foundUser = this.user.findUserByEmailAddress({
      emailAddress: user.emailAddress,
    });
    return foundUser;
  }
  @Get('/admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @SetMetadata('roles', ['admin'])
  getAdmin(@Request() request): object {
    const { user } = request;
    const foundUser = this.user.findUserByEmailAddress({
      emailAddress: user.emailAddress,
    });
    return foundUser;
  }

  @Get('/login')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @SetMetadata('roles', ['teacher', 'parent', 'student', 'admin'])
  getTeacher(@Request() request): object {
    const { user } = request;
    const foundUser = this.user.findUserByEmailAddress({
      emailAddress: user.emailAddress,
    });
    return foundUser;
  }

  @Post('/create')
  async createUser(@Body() request): Promise<object> {
    try {
      const { emailAddress, password, role } = request;
      const createdUserId = await this.user.createUser({
        emailAddress,
        password,
        role,
      });
      return {
        createdUserId: createdUserId,
      };
    } catch (e) {
      throw new HttpException('Forbidden', HttpStatus.CONFLICT);
    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.user.findOne(id);
  }
  @Get()
  async findAll() {
    return this.user.findAll();
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.user.remove(id);
  }
}
