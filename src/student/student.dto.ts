import { IsNotEmpty, IsString } from 'class-validator';

export class StudentDto {
  @IsNotEmpty()
  @IsString()
  studentId: string;
  @IsNotEmpty()
  @IsString()
  studentName: string;
  @IsNotEmpty()
  @IsString()
  address: string;
  @IsNotEmpty()
  @IsString()
  emailAddress: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  class: string;
  @IsNotEmpty()
  @IsString()
  parentId: string;
}
