import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from "@nestjs/common";
import { TeacherAssignTaskToStudentService } from "./teacher-assign-task-to-student.service";
import { AssignTask } from "../schemas/teacherAssignTaskToStudent.schema";

@Controller("teacher-assign-task-to-student")
export class TeacherAssignTaskToStudentController {
  constructor(
    private readonly teacherAssignTaskService: TeacherAssignTaskToStudentService
  ) {}

  @Post("/update")
  async assignClass(
    @Body("taskId") taskId: string,
    @Body("studentId") studentId: string
  ) {
    const teacherAssignTask = await this.teacherAssignTaskService.assignTask(
      taskId,
      studentId
    );
    return { teacherAssignTask };
  }
  @Post("/assignTask")
  async assignClasses(
    @Body("taskId") taskIds: string[],
    @Body("studentId") studentId: string
  ) {
    try {
      const teacherAssignTasks = [];
      if (!Array.isArray(taskIds)) {
        console.log(taskIds);
        throw new HttpException(
          "tasks must be an array",
          HttpStatus.BAD_REQUEST
        );
      }

      for (const taskId of taskIds) {
        const teacherAssignment =
          await this.teacherAssignTaskService.teacherAssignMultipleTask(
            taskId,
            studentId
          );

        teacherAssignTasks.push(teacherAssignment);
      }

      return { teacherAssignTasks };
    } catch (e) {
      console.log(e);
    }
  }

  @Get("list")
  async findAll() {
    const teacherAssignTasks = await this.teacherAssignTaskService.findAll();
    return { teacherAssignTasks };
  }

  @Get(":id")
  async getTaskById(@Param("id") id: string) {
    const teacherAssignTask = await this.teacherAssignTaskService.findTaskById(
      id
    );
    return { teacherAssignTask };
  }

  @Get("student/:studentId/tasks")
  async getTasksByStudentId(
    @Param("studentId") studentId: string
  ): Promise<AssignTask[]> {
    const tasks = await this.teacherAssignTaskService.getTasksByStudentId(
      studentId
    );
    return tasks;
  }

  /*@Get('task/:taskId')
  async getTaskById(@Param('taskId') taskId: string): Promise<AssignTask> {
    const task = await this.teacherAssignTaskService.getTaskById(taskId);
    return task;
  }*/
}
