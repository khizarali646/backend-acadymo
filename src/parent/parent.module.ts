import { Module } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentController } from './parent.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Parent, ParentSchema } from '../schemas/parent.schema';

@Module({
  providers: [ParentService],
  controllers: [ParentController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Parent.name, schema: ParentSchema }]),
  ],
})
export class ParentModule {}
