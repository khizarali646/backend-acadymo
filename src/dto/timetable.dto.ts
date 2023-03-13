import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TimetableDto {
  @IsString()
  @IsNotEmpty()
  timetableId: string;
  @IsString()
  @IsNotEmpty()
  timetableName: string;
  @IsString()
  @IsNotEmpty()
  class: string;
  @IsNumber()
  @IsNotEmpty()
  time: number;
}
