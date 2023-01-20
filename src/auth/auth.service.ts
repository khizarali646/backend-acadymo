import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserAuthDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private user: UserService, private jwtService: JwtService) {}

  async authenticate(loginRequest: UserAuthDto): Promise<any> {
    const { emailAddress, password } = loginRequest;
    const user = await this.user.findUserByEmailAddress({ emailAddress });
    if (!user) {
      return null;
    }

    const isMatch = await bcrypt.compare(password, user?.password);
    if (isMatch) {
      return this.jwtService.sign(user);
    }
    return null;
  }
}
