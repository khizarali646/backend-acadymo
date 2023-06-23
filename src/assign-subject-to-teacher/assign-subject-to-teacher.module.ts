import { Module } from "@nestjs/common";
import { AssignSubjectToTeacherController } from "./assign-subject-to-teacher.controller";
import { AssignSubjectToTeacherService } from "./assign-subject-to-teacher.service";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import {
  AssignSubject,
  AssignSubjectSchema,
} from "../schemas/assignSubjectToTeacher.schema.s";

@Module({
  controllers: [AssignSubjectToTeacherController],
  providers: [AssignSubjectToTeacherService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: AssignSubject.name, schema: AssignSubjectSchema },
    ]),
  ],
})
export class AssignSubjectToTeacherModule {}
