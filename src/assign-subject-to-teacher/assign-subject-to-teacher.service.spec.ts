import { Test, TestingModule } from "@nestjs/testing";
import { AssignSubjectToTeacherService } from "./assign-subject-to-teacher.service";

describe("AssignSubjectToTeacherService", () => {
  let service: AssignSubjectToTeacherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignSubjectToTeacherService],
    }).compile();

    service = module.get<AssignSubjectToTeacherService>(
      AssignSubjectToTeacherService
    );
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
