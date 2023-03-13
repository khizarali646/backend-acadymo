import { IsNotEmpty, IsString } from 'class-validator';

export class CampusDto {
  @IsString()
  @IsNotEmpty()
  campusName: string;

  @IsString()
  @IsNotEmpty()
  campusAddress: string;
  @IsString()
  @IsNotEmpty()
  organizationId: string;
}
