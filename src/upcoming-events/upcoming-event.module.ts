import { Module } from '@nestjs/common';
import { UpcomingEventService } from './upcoming-event.service';
import { UpcomingEventController } from './upcoming-event.controller';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { UpcomingEvents, UpcomingEventsSchema } from "../schemas/upcoming-events.schema";

@Module({
  providers: [UpcomingEventService],
  controllers: [UpcomingEventController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: UpcomingEvents.name, schema: UpcomingEventsSchema },
    ]),
  ],
})
export class UpcomingEventModule {}
