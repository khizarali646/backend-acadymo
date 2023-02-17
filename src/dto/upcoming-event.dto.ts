import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class UpcomingEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  startDate: Date;
  @IsDate()
  @IsNotEmpty()
  endDate: Date;
  @IsString()
  @IsNotEmpty()
  location: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}
