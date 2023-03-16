import { IsNotEmpty, IsString } from 'class-validator';

export class ClassDto {
  @IsNotEmpty()
  @IsString()
  classname: string;
  @IsNotEmpty()
  @IsString()
  noOfStudent: number;
  @IsNotEmpty()
  @IsString()
  campusId: string;
  @IsNotEmpty()
  @IsString()
  sectionId: string;
}
