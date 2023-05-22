import { IsNotEmpty, IsString } from "class-validator";

export class ClassDto {
  @IsNotEmpty()
  @IsString()
  classname: string;
}
