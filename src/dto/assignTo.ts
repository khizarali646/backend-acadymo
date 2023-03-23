import { IsNotEmpty, IsString } from 'class-validator';

export class AssignToDto {
  @IsNotEmpty()
  classId: string;

  @IsString()
  @IsNotEmpty()
  teacherId: string;
}
