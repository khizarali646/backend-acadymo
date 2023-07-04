import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { SubjectService } from "./subject.service";
import { SubjectDto } from "../dto/subject.dto";
import { SubjectDocument } from "../schemas/subject.schema";

@Controller("subject")
export class SubjectController {
  constructor(private readonly SubjectService: SubjectService) {}

  @Post("/create")
  async create(@Body() createSubjectDto: SubjectDto): Promise<SubjectDocument> {
    return this.SubjectService.create(createSubjectDto);
  }

  @Get()
  async findAll() {
    return this.SubjectService.findAll();
  }
  @Get(":id")
  async findOne(@Param("id") id: string): Promise<SubjectDocument> {
    return this.SubjectService.findOne(id);
  }
  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateSubjectDto: SubjectDto
  ): Promise<SubjectDocument> {
    return this.SubjectService.update(id, updateSubjectDto);
  }
  @Delete(":id")
  async remove(id: string): Promise<SubjectDocument> {
    return this.SubjectService.remove(id);
  }
  @Post("/assign/teacher")
  async assignSubjectToTeacher(
    @Body("subjectId") subjectId: string,
    @Body("teacherId") teacherId: string
  ) {
    const AssignSubjectToTeacher = await this.SubjectService.assignSubject(
      subjectId,
      teacherId
    );
    return { AssignSubjectToTeacher };
  }
}
