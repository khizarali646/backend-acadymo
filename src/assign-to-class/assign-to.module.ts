import { Module } from '@nestjs/common';
import { AssignToService } from './assign-to.service';
import { AssignToController } from './assign-to.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Assign, AssignSchema } from '../schemas/assignTo';
import { Class, ClassSchema } from "../schemas/class.schema";
import { Teacher, TeacherSchema } from "../schemas/teacher.schema";

@Module({
  providers: [AssignToService],
  controllers: [AssignToController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Assign.name, schema: AssignSchema },
      { name: Class.name, schema: ClassSchema },
      { name: Teacher.name, schema: TeacherSchema },
    ]),
  ],
})
export class AssignToModule {}
