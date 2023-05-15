import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Subject, SubjectDocument } from "../schemas/subject.schema";
import { SubjectDto } from "../dto/subject.dto";

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private SubjectModel: Model<SubjectDocument>
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
}
