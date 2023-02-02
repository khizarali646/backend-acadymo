import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema, CampusAdmin } from '../schemas/admin.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [AdminService],
  controllers: [AdminController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: CampusAdmin.name, schema: AdminSchema },
    ]),
  ],
})
export class AdminModule {}
