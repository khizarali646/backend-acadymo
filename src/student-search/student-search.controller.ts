import { Controller, Get, Query } from '@nestjs/common';
import { StudentSearchService } from './student-search.service';
import { User, UserDocument } from '../schemas/user.schema';
import { Task } from '../schemas/task.schema';

@Controller('students')
export class StudentSearchController {
  constructor(private readonly studentSearchService: StudentSearchService) {}

  @Get('/search')
  async search(
    @Query('q') query: string,
  ): Promise<{ users: User[]; tasks: Task[] }> {
    const results = await this.studentSearchService.studentSearch(query);
    return results;
  }
}
