import { IsString, IsNotEmpty } from 'class-validator';

export class OrganizationDto {
  @IsString()
  @IsNotEmpty()
  organizationID: string;
  @IsString()
  @IsNotEmpty()
  organizationName: string;
  @IsString()
  @IsNotEmpty()
  organizationAddress: string;
  @IsString()
  @IsNotEmpty()
  noOfCampus: number;
}
