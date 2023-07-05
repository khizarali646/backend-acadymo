import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Subject, SubjectDocument } from "../schemas/subject.schema";
import { SubjectDto } from "../dto/subject.dto";
import {
  AssignSubject,
  AssignSubjectDocument,
} from "../schemas/assignSubjectToTeacher.schema";
import { AssignStudentDocument } from "../schemas/assignStudentToClass.schema";

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private SubjectModel: Model<SubjectDocument>,
    @InjectModel(AssignSubject.name)
    readonly AssignSubjectModel: Model<AssignSubjectDocument>
  ) {}

  async create(createSubjectDto: SubjectDto): Promise<SubjectDocument> {
    try {
      const createdSubject = new this.SubjectModel(createSubjectDto);
      return await createdSubject.save();
    } catch (e) {
      throw new HttpException("SUBJECT ALREADY Exists", HttpStatus.CONFLICT);
    }
  }

  async findAll(): Promise<SubjectDocument[]> {
    return this.SubjectModel.find().exec();
  }

  async findOne(id: string): Promise<SubjectDocument> {
    return this.SubjectModel.findById(id);
  }

  async update(
    id: string,
    updateSubjectDto: SubjectDto
  ): Promise<SubjectDocument> {
    return this.SubjectModel.findByIdAndUpdate(id, updateSubjectDto, {
      new: true,
    });
  }
  async remove(id: string): Promise<SubjectDocument> {
    return this.SubjectModel.findByIdAndRemove(id);
  }
  async assignSubject(
    subjectId: string,
    teacherId: string
  ): Promise<AssignSubjectDocument> {
    try {
      const teacherAssignSubject =
        await this.AssignSubjectModel.findOneAndUpdate(
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
  async getSubjectsOfTeacher(
    teacherId: string
  ): Promise<AssignSubjectDocument[]> {
    return this.AssignSubjectModel.find({ teacherId: teacherId }).populate(
      "subjectId"
    );
  }
}
