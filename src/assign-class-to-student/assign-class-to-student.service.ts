import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {
  AssignClass,
  AssignClassDocument,
} from "../schemas/assignClassToStudent.schema";
import { Model } from "mongoose";

@Injectable()
export class AssignClassToStudentService {
  constructor(
    @InjectModel(AssignClass.name)
    readonly AssignModel: Model<AssignClassDocument>
  ) {}
  async assignClass(
    classId: string,
    studentId: string
  ): Promise<AssignClassDocument> {
    try {
      const AssignClassToStudent = await this.AssignModel.findOneAndUpdate(
        { classId: classId },
        { studentId: studentId },
        { new: true, upsert: true }
      )
        .populate("classId")
        .populate("studentId");
      return AssignClassToStudent;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        "Class is already assigned to a student",
        HttpStatus.CONFLICT
      );
    }
  }
  async getAssignedClassesForStudent(
    studentId: string
  ): Promise<AssignClassDocument[]> {
    return this.AssignModel.find({ studentId: studentId }).populate("classId");
  }
}
