import { Body, Controller, Post } from '@nestjs/common';
import { TeacherAssignTaskToStudentService } from './teacher-assign-task-to-student.service';

@Controller('teacher-assign-task-to-student')
export class TeacherAssignTaskToStudentController {
  constructor(
    private readonly teacherAssignTaskService: TeacherAssignTaskToStudentService,
  ) {}

  @Post('/update')
  async assignClass(
    @Body('taskId') taskId: string,
    @Body('studentId') studentId: string,
  ) {
    const teacherAssignTask = await this.teacherAssignTaskService.assignTask(
      taskId,
      studentId,
    );
    return { teacherAssignTask };
  }
}
