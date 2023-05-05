import { Test, TestingModule } from '@nestjs/testing';
import { AssignClassToStudentService } from './assign-class-to-student.service';

describe('AssignClassToStudentService', () => {
  let service: AssignClassToStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignClassToStudentService],
    }).compile();

    service = module.get<AssignClassToStudentService>(AssignClassToStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
