import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from "@nestjs/common";
import { AssignToService } from "./assign-to.service";
import { AssignDocument } from "../schemas/assignTeacherToClass.schema";

@Controller("assign-teacher-to-class")
export class AssignToController {
  constructor(private readonly assignService: AssignToService) {}

  @Post("/update")
  async assignClass(
    @Body("classId") classId: string,
    @Body("teacherId") teacherId: string
  ) {
    const teacherAssignClass = await this.assignService.assignClass(
      classId,
      teacherId
    );
    return { teacherAssignClass };
  }
  @Post("/assign")
  async assignClasses(
    @Body("classIds") classIds: string[],
    @Body("teacherId") teacherId: string,
    @Body("sectionName") sectionNames: string[]
  ) {
    try {
      const teacherAssignments = [];

      if (!Array.isArray(classIds)) {
        console.log(classIds);
        throw new HttpException(
          "classIds must be an array",
          HttpStatus.BAD_REQUEST
        );
      }

      // for (const classId of classIds) {
      for (let i = 0; i < classIds.length; i++) {
        const classId = classIds[i];
        const sectionName = sectionNames[i];
        const teacherAssignment = await this.assignService.asignClasses(
          classId,
          teacherId,
          sectionName
        );

        teacherAssignments.push(teacherAssignment);
      }

      return { teacherAssignments };
    } catch (e) {
      console.log(e);
    }
  }

  @Get("teacher/:teacherId")
  async getAssignedClassesForTeacher(
    @Param("teacherId") teacherId: string
  ): Promise<AssignDocument[]> {
    return this.assignService.getAssignedClassesForTeacher(teacherId);
  }
  @Delete("/teacher/:teacherId")
  async delete(@Param("teacherId") teacherId: string): Promise<AssignDocument> {
    return this.assignService.delete(teacherId);
  }
}
