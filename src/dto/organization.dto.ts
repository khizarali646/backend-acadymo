import { IsString, IsNotEmpty } from 'class-validator';

export class OrganizationDto {
  @IsString()
  @IsNotEmpty()
  organizationName: string;
  @IsString()
  @IsNotEmpty()
  organizationAddress: string;
  @IsString()
  @IsNotEmpty()
  noOfCampus: number;
  // @IsString()
  // @IsNotEmpty()
  // userId: string;
}
