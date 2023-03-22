import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from '../schemas/task.schema';

@Module({
  providers: [TaskService],
  controllers: [TaskController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
})
export class TaskModule {}
