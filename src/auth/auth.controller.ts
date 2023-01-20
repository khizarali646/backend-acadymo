import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserAuthDto, UserAuthResponseDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/')
  async authenticateUser(
    @Body() loginRequest: UserAuthDto,
  ): Promise<UserAuthResponseDto> {
    const authenticationResponse = await this.authService.authenticate(
      loginRequest,
    );

    if (!authenticationResponse) {
      throw new HttpException('Forbidden', HttpStatus.NOT_FOUND);
    }

    return {
      token: authenticationResponse,
    };
  }
}
