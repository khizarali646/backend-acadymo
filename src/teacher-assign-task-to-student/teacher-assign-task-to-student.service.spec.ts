import { Test, TestingModule } from '@nestjs/testing';
import { TeacherAssignTaskToStudentService } from './teacher-assign-task-to-student.service';

describe('TeacherAssignTaskToStudentService', () => {
  let service: TeacherAssignTaskToStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherAssignTaskToStudentService],
    }).compile();

    service = module.get<TeacherAssignTaskToStudentService>(TeacherAssignTaskToStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
