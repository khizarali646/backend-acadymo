import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Organization,
  OrganizationSchema,
} from '../schemas/organization.schema';

@Module({
  providers: [OrganizationService],
  controllers: [OrganizationController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Organization.name, schema: OrganizationSchema },
    ]),
  ],
})
export class OrganizationModule {}
