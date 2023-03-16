import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { Exclude } from 'class-transformer';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  emailAddress: string;
  @IsString()
  @IsNotEmpty()
  @Exclude()
  password: string;
  @IsString()
  @IsNotEmpty()
  role: string;
  @IsString()
  @IsNotEmpty()
  profile: object;
}
