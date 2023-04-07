import { Test, TestingModule } from '@nestjs/testing';
import { StudentSearchController } from './student-search.controller';

describe('StudentSearchController', () => {
  let controller: StudentSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentSearchController],
    }).compile();

    controller = module.get<StudentSearchController>(StudentSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
