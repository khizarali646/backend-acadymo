import { Module } from "@nestjs/common";
import { ClassService } from "./class.service";
import { ClassController } from "./class.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Class, ClassSchema } from "../schemas/class.schema";
import { ConfigModule } from "@nestjs/config";
import {
  AssignClass,
  AssignClassSchema,
} from "../schemas/assignTeacherToClass.schema";
import {
  AssignStudentSchema,
  AssignStudentToClass,
} from "../schemas/assignStudentToClass.schema";

@Module({
  providers: [ClassService],
  controllers: [ClassController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Class.name, schema: ClassSchema },
      { name: AssignClass.name, schema: AssignClassSchema },
      { name: AssignStudentToClass.name, schema: AssignStudentSchema },
    ]),
  ],
})
export class ClassModule {}
