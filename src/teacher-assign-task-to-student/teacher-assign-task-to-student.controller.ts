import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
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
  @Post('/assignTask')
  async assignClasses(
    @Body('taskIds') taskIds: string[],
    @Body('studentId') studentId: string,
  ) {
    try {
      const teacherAssignTasks = [];

      if (!Array.isArray(taskIds)) {
        console.log(taskIds);
        throw new HttpException(
          'classIds must be an array',
          HttpStatus.BAD_REQUEST,
        );
      }

      for (const taskId of taskIds) {
        const teacherAssignment =
          await this.teacherAssignTaskService.teacherAssignMultipleTask(
            taskId,
            studentId,
          );

        teacherAssignTasks.push(teacherAssignment);
      }

      return { teacherAssignTasks };
    } catch (e) {
      console.log(e);
    }
  }
}
