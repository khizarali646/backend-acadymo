import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Subject, SubjectSchema } from '../schemas/subject.schema';

@Module({
  providers: [SubjectService],
  controllers: [SubjectController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }])
  ],
})
export class SubjectModule {}
