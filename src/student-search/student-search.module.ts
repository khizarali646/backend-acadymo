import { Module } from '@nestjs/common';
import { StudentSearchService } from './student-search.service';
import { StudentSearchController } from './student-search.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StudentSearch,
  StudentSearchSchema,
} from '../schemas/studentSearch.schema';
import { User, UserSchema } from '../schemas/user.schema';
import { Task, TaskSchema } from '../schemas/task.schema';

@Module({
  providers: [StudentSearchService],
  controllers: [StudentSearchController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: StudentSearch.name, schema: StudentSearchSchema },
      { name: User.name, schema: UserSchema },
      { name: Task.name, schema: TaskSchema },
    ]),
  ],
})
export class StudentSearchModule {}
