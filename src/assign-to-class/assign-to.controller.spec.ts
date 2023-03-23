import { Test, TestingModule } from '@nestjs/testing';
import { AssignToController } from './assign-to.controller';

describe('AssignToController', () => {
  let controller: AssignToController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignToController],
    }).compile();

    controller = module.get<AssignToController>(AssignToController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
