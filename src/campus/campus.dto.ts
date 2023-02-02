import { IsNotEmpty, IsString } from 'class-validator';

export class CampusDto {
  @IsString()
  @IsNotEmpty()
  campusId: string;

  @IsString()
  @IsNotEmpty()
  campusName: string;

  @IsString()
  @IsNotEmpty()
  campusAddress: string;
}
