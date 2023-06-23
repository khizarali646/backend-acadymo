import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AssignSubjectToTeacherService } from "./assign-subject-to-teacher.service";
import { AssignSubjectDocument } from "../schemas/assignSubjectToTeacher.schema.s";

@Controller("assign-subject-to-teacher")
export class AssignSubjectToTeacherController {
  constructor(private readonly assignService: AssignSubjectToTeacherService) {}
  @Post("/update")
  async assignSubjectToTeacher(
    @Body("subjectId") subjectId: string,
    @Body("teacherId") teacherId: string
  ) {
    const AssignSubjectToTeacher = await this.assignService.assignSubject(
      subjectId,
      teacherId
    );
    return { AssignSubjectToTeacher };
  }
  @Get("teacher/:teacherId")
  async getAssignedSubjectsForTeacher(
    @Param("teacherId") teacherId: string
  ): Promise<AssignSubjectDocument[]> {
    return this.assignService.getAssignedSubjectsForTeacher(teacherId);
  }
}
