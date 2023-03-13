import { IsNotEmpty, IsString } from 'class-validator';

export class SectionDto {
  @IsString()
  @IsNotEmpty()
  sectionId: string;

  @IsString()
  @IsNotEmpty()
  sectionName: string;
}
