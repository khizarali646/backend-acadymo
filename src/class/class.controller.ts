import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { ClassDto } from "./class.dto";
import { ClassService } from "./class.service";
import { ClassDocument } from "../schemas/class.schema";
import { AssignDocument } from "../schemas/assignTeacherToClass.schema";
import { AssignStudentDocument } from "../schemas/assignStudentToClass.schema";

@Controller("class")
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post("/create")
  async create(@Body() createClassDto: ClassDto) {
    try {
      return this.classService.create(createClassDto);
    } catch (e) {
      console.log(e);
    }
  }

  @Get()
  async findAll() {
    return this.classService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<ClassDocument> {
    return this.classService.findOne(id);
  }
  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateClassDto: ClassDto
  ): Promise<ClassDocument> {
    return this.classService.update(id, updateClassDto);
  }
  @Delete(":id")
  async remove(@Param("id") id: string): Promise<ClassDocument> {
    return this.classService.remove(id);
  }
  @Post("/teacher/update")
  async assignClass(
    @Body("classId") classId: string,
    @Body("teacherId") teacherId: string
  ) {
    const teacherAssignClass = await this.classService.assignClass(
      classId,
      teacherId
    );
    return { teacherAssignClass };
  }
  @Post("/assign/teacher")
  async assignClasses(
    @Body("classIds") classIds: string[],
    @Body("teacherId") teacherId: string
  ) {
    try {
      const AssignedClasses = [];

      if (!Array.isArray(classIds)) {
        throw new HttpException(
          "classIds must be an array",
          HttpStatus.BAD_REQUEST
        );
      }

      for (const classId of classIds) {
        const teacherClass = await this.classService.assignClasses(
          classId,
          teacherId
        );
        AssignedClasses.push(teacherClass);
      }
      return { AssignedClasses };
    } catch (e) {
      console.log(e);
    }
  }
  @Get("teacher/:teacherId")
  async getAssignedClassesForTeacher(
    @Param("teacherId") teacherId: string
  ): Promise<AssignDocument[]> {
    return this.classService.getAssignedClassesForTeacher(teacherId);
  }
  @Delete("/teacher/:teacherId")
  async delete(@Param("teacherId") teacherId: string): Promise<AssignDocument> {
    return this.classService.delete(teacherId);
  }
  @Post("assign/student")
  async assignStudentsToClass(
    @Body("classIds") classIds: string[],
    @Body("studentId") studentId: string
  ) {
    try {
      const StudentClasses = [];

      if (!Array.isArray(classIds)) {
        throw new HttpException(
          "classIds must be an array",
          HttpStatus.BAD_REQUEST
        );
      }

      for (const classId of classIds) {
        const studentClass = await this.classService.assignStudentsToClass(
          classId,
          studentId
        );
        StudentClasses.push(studentClass);
      }
      return { StudentClasses };
    } catch (e) {
      console.log(e);
    }
  }
  @Get("student/:studentId")
  async getAssignedClassesForStudent(
    @Param("studentId") studentId: string
  ): Promise<AssignStudentDocument[]> {
    return this.classService.getAssignedClassesForStudent(studentId);
  }
  @Get("class/:classId")
  async getAssignedStudentsForClass(
    @Param("classId") classId: string
  ): Promise<AssignStudentDocument[]> {
    return this.classService.getAssignedStudentsForClass(classId);
  }
}
