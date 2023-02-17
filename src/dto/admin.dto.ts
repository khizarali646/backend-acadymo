import { IsNotEmpty, IsString } from 'class-validator';

export class AdminDto {
  @IsString()
  @IsNotEmpty()
  adminId: string;
  @IsString()
  @IsNotEmpty()
  emailAddress: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
