import { Test, TestingModule } from '@nestjs/testing';
import { AssignToService } from './assign-to.service';

describe('AssignToService', () => {
  let service: AssignToService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignToService],
    }).compile();

    service = module.get<AssignToService>(AssignToService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
