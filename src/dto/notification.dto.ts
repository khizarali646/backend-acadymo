import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class NotificationDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsDate()
  @IsNotEmpty()
  date: Date;
}
