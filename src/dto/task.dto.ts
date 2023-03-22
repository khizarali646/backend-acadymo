import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class TaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  assignTo: string;
  @IsDate()
  @IsNotEmpty()
  startDate: string;
  @IsDate()
  @IsNotEmpty()
  endDate: string;
}
