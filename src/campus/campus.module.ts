import { Module } from '@nestjs/common';
import { CampusController } from './campus.controller';
import { CampusService } from './campus.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Campus, CampusSchema } from '../schemas/campus.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [CampusService],
  controllers: [CampusController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Campus.name, schema: CampusSchema }]),
  ],
})
export class CampusModule {}
