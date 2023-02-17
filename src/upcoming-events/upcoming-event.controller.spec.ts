import { Test, TestingModule } from '@nestjs/testing';
import { UpcomingEventController } from './upcoming-event.controller';

describe('UpcomingEventController', () => {
  let controller: UpcomingEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpcomingEventController],
    }).compile();

    controller = module.get<UpcomingEventController>(UpcomingEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
