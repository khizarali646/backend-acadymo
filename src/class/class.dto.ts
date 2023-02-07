import { IsNotEmpty, IsString } from 'class-validator';

export class ClassDto {
  @IsNotEmpty()
  @IsString()
  classId: string;
  @IsNotEmpty()
  @IsString()
  classname: string;
  @IsNotEmpty()
  @IsString()
  subjectName: string;
  @IsNotEmpty()
  @IsString()
  noOfStudent: number;
  @IsNotEmpty()
  @IsString()
  teacherId: string;
  @IsNotEmpty()
  @IsString()
  studentId: string;
}
