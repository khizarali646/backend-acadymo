import { Body, Controller, Param, Post } from '@nestjs/common';
import { AssignToService } from './assign-to.service';
import { Assign, AssignDocument } from "../schemas/assignTo";
import { AssignToDto } from '../dto/assignTo';

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
}
