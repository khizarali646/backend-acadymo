import { Test, TestingModule } from '@nestjs/testing';
import { TeacherAssignTaskToStudentController } from './teacher-assign-task-to-student.controller';

describe('TeacherAssignTaskToStudentController', () => {
  let controller: TeacherAssignTaskToStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherAssignTaskToStudentController],
    }).compile();

    controller = module.get<TeacherAssignTaskToStudentController>(TeacherAssignTaskToStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
