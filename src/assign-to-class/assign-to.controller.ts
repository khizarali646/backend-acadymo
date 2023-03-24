import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AssignToService } from './assign-to.service';
import { AssignToDto } from '../dto/assignTo';
import { AssignDocument } from '../schemas/assignTo';

@Controller('assign-to-class')
export class AssignToController {
  constructor(private readonly assignService: AssignToService) {}

  /*  @Post(':classId/teacher/:teacherId')
  async assignTeacherToClass(
    @Param('classId') classId: string,
    @Param('teacherId') teacherId: string,
  ): Promise<any> {
    const assign = await this.assignService.assignTeacherToClass(
      classId,
      teacherId,
    );
    return assign;
  }*/

  @Post(':classId/teacher/:teacherId')
  async assignTeacherToClass(
    @Param('classId') classId: string,
    @Param('teacherId') teacherId: string,
  ): Promise<AssignToDto> {
    const assign = await this.assignService.assignTeacherToClass(
      classId,
      teacherId,
    );
    return {
      classId: classId,
      teacherId: teacherId,
    };
  }

  @Post('/update')
  async assignClass(
    @Body('classId') classId: string,
    @Body('teacherId') teacherId: string,
  ) {
    const teacherAssignClass = await this.assignService.assignClass(
      classId,
      teacherId,
    );
    return { teacherAssignClass };
  }
  @Get('teacher/:teacherId')
  async getAssignedClassesForTeacher(
    @Param('teacherId') teacherId: string,
  ): Promise<AssignDocument[]> {
    return this.assignService.getAssignedClassesForTeacher(teacherId);
  }
  @Delete('/teacher/:teacherId')
  async delete(@Param('teacherId') teacherId: string): Promise<AssignDocument> {
    return this.assignService.delete(teacherId);
  }
}
