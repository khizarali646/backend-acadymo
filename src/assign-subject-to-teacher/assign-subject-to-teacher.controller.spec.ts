import { Test, TestingModule } from "@nestjs/testing";
import { AssignSubjectToTeacherController } from "./assign-subject-to-teacher.controller";

describe("AssignSubjectToTeacherController", () => {
  let controller: AssignSubjectToTeacherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignSubjectToTeacherController],
    }).compile();

    controller = module.get<AssignSubjectToTeacherController>(
      AssignSubjectToTeacherController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
