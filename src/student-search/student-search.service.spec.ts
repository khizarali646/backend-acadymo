import { Test, TestingModule } from '@nestjs/testing';
import { StudentSearchService } from './student-search.service';

describe('StudentSearchService', () => {
  let service: StudentSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentSearchService],
    }).compile();

    service = module.get<StudentSearchService>(StudentSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
