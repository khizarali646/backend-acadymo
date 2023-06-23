import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  AssignSubject,
  AssignSubjectDocument,
} from "../schemas/assignSubjectToTeacher.schema.s";

@Injectable()
export class AssignSubjectToTeacherService {
  constructor(
    @InjectModel(AssignSubject.name)
    readonly SubjectModel: Model<AssignSubjectDocument>
  ) {}
  async assignSubject(
    subjectId: string,
    teacherId: string
  ): Promise<AssignSubjectDocument> {
    try {
      const teacherAssignSubject = await this.SubjectModel.findOneAndUpdate(
        { subjectId: subjectId },
        { teacherId: teacherId },
        { new: true, upsert: true }
      )
        .populate("subjectId")
        .populate("teacherId");
      return teacherAssignSubject;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        "Subject is already assigned to a teacher",
        HttpStatus.CONFLICT
      );
    }
  }
  async getAssignedSubjectsForTeacher(
    teacherId: string
  ): Promise<AssignSubjectDocument[]> {
    return this.SubjectModel.find({ teacherId: teacherId }).populate(
      "subjectId"
    );
  }
  async delete(teacherId: string): Promise<AssignSubjectDocument> {
    return this.SubjectModel.findByIdAndRemove(teacherId).exec();
  }
}
