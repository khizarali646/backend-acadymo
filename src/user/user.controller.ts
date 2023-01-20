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
} from '@nestjs/common';

import { UserService } from './user.service';
import { JwtAuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/roles.gurad';

@Controller('user')
export class UserController {
  constructor(private user: UserService) {}

  @Get('/roles')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @SetMetadata('roles', ['admin'])
  getUser(@Request() request): object {
    const { user } = request;
    const foundUser = this.user.findUserByEmailAddress({
      emailAddress: user.emailAddress,
    });
    return foundUser;
  }

  @Post()
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
}
