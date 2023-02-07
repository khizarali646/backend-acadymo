import { IsNotEmpty, IsString } from 'class-validator';

export class TeacherDto {
  @IsNotEmpty()
  @IsString()
  teacherId: string;

  @IsNotEmpty()
  @IsString()
  emailAddress: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  teacherName: string;
  @IsNotEmpty()
  @IsString()
  contactNo: string;
  @IsNotEmpty()
  @IsString()
  addedBy: string;
}
