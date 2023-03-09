import { IsNotEmpty, IsString } from 'class-validator';

export class SubjectDto {
  @IsString()
  @IsNotEmpty()
  subjectId: string;
  @IsString()
  @IsNotEmpty()
  subjectName: string;
  @IsString()
  @IsNotEmpty()
  subjectCode: string;
  @IsString()
  @IsNotEmpty()
  organizationId: string;
}
