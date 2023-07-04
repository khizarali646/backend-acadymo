import { Module } from "@nestjs/common";
import { SubjectService } from "./subject.service";
import { SubjectController } from "./subject.controller";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { Subject, SubjectSchema } from "../schemas/subject.schema";
import {
  AssignSubject,
  AssignSubjectSchema,
} from "../schemas/assignSubjectToTeacher.schema";

@Module({
  providers: [SubjectService],
  controllers: [SubjectController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Subject.name, schema: SubjectSchema },
      { name: AssignSubject.name, schema: AssignSubjectSchema },
    ]),
  ],
})
export class SubjectModule {}
