import { Test, TestingModule } from '@nestjs/testing';
import { AssignClassToStudentController } from './assign-class-to-student.controller';

describe('AssignClassToStudentController', () => {
  let controller: AssignClassToStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignClassToStudentController],
    }).compile();

    controller = module.get<AssignClassToStudentController>(AssignClassToStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
