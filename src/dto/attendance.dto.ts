import { IsNotEmpty, IsString } from 'class-validator';

export class AttendanceDto {
  @IsString()
  @IsNotEmpty()
  attendanceId: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  rollNo: string;
  @IsString()
  @IsNotEmpty()
  date: string;
  @IsString()
  @IsNotEmpty()
  attendanceStatus: string;
  @IsString()
  @IsNotEmpty()
  studentId: string;
}
