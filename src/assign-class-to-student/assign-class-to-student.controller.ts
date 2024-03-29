// import { Body, Controller, Get, Param, Post } from "@nestjs/common";
// import { AssignClassToStudentService } from "./assign-class-to-student.service";
// import { AssignStudentDocument } from "../schemas/assignStudentToClass.schema";
//
// @Controller("assign-class-to-student")
// export class AssignClassToStudentController {
//   constructor(private readonly assignService: AssignClassToStudentService) {}
//   @Post("/update")
//   async assignClassToStudent(
//     @Body("classId") classId: string,
//     @Body("studentId") studentId: string
//   ) {
//     const AssignClassToStudent = await this.assignService.assignClass(
//       classId,
//       studentId
//     );
//     return { AssignClassToStudent };
//   }
//   @Get("student/:studentId")
//   async getAssignedClassesForStudent(
//     @Param("studentId") studentId: string
//   ): Promise<AssignStudentDocument[]> {
//     return this.assignService.getAssignedClassesForStudent(studentId);
//   }
//   @Get("class/:classId")
//   async getAssignedStudentsForClass(
//     @Param("classId") classId: string
//   ): Promise<AssignStudentDocument[]> {
//     return this.assignService.getAssignedStudentsForClass(classId);
//   }
// }
