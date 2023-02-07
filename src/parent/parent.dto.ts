import { IsNotEmpty, IsString } from 'class-validator';

export class ParentDto {
  @IsNotEmpty()
  @IsString()
  parentId: string;
  @IsNotEmpty()
  @IsString()
  parentName: string;
  @IsNotEmpty()
  @IsString()
  emailAddress: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  address: string;
  @IsNotEmpty()
  @IsString()
  studentId: string;
}
