import { Module } from "@nestjs/common";
import { SectionService } from "./section.service";
import { SectionController } from "./section.controller";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { Section, SectionSchema } from "../schemas/section.schema";

@Module({
  providers: [SectionService],
  controllers: [SectionController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Section.name, schema: SectionSchema }]),
  ],
})
export class SectionModule {}
