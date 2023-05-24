import { IsNotEmpty, IsString } from "class-validator";

export class ClassDto {
  @IsNotEmpty()
  @IsString()
  className: string;
  @IsNotEmpty()
  @IsString()
  sectionId: [];
}
