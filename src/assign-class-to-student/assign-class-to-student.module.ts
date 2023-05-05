import { Module } from "@nestjs/common";
import { AssignClassToStudentService } from "./assign-class-to-student.service";
import { AssignClassToStudentController } from "./assign-class-to-student.controller";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { Class, ClassSchema } from "../schemas/class.schema";
import {
  AssignClass,
  AssignClassSchema,
} from "../schemas/assignClassToStudent.schema";

@Module({
  providers: [AssignClassToStudentService],
  controllers: [AssignClassToStudentController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: AssignClass.name, schema: AssignClassSchema },
      { name: Class.name, schema: ClassSchema },
    ]),
  ],
})
export class AssignClassToStudentModule {}
