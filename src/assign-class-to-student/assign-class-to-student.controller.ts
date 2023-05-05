import { Body, Controller, Post } from "@nestjs/common";
import { AssignClassToStudentService } from "./assign-class-to-student.service";

@Controller("assign-class-to-student")
export class AssignClassToStudentController {
  constructor(private readonly assignService: AssignClassToStudentService) {}
  @Post("/update")
  async assignClassToStudent(
    @Body("classId") classId: string,
    @Body("studentId") studentId: string
  ) {
    const AssignClassToStudent = await this.assignService.assignClass(
      classId,
      studentId
    );
    return { AssignClassToStudent };
  }
}
