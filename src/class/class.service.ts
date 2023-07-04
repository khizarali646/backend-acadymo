import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Class, ClassDocument } from "../schemas/class.schema";
import { Model } from "mongoose";
import { ClassDto } from "./class.dto";
import {
  AssignClass,
  AssignDocument,
} from "../schemas/assignTeacherToClass.schema";
import {
  AssignStudentDocument,
  AssignStudentToClass,
} from "../schemas/assignStudentToClass.schema";

@Injectable()
export class ClassService {
  constructor(
    @InjectModel(Class.name) private ClassModel: Model<ClassDocument>,
    @InjectModel(AssignClass.name) private AssignModel: Model<AssignDocument>,
    @InjectModel(AssignStudentToClass.name)
    private AssignStudentModel: Model<AssignStudentDocument>
  ) {}
  async create(classDto: ClassDto): Promise<ClassDocument> {
    try {
      const className = classDto.className;
      const sectionId = classDto.sectionId;

      console.log({ className });

      return this.ClassModel.findOneAndUpdate(
        {
          className: className,
        },
        {
          $addToSet: {
            sectionId: sectionId,
          },
        },
        {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        }
      );
    } catch (e) {
      console.log(e);
      throw new HttpException("Class Already Registered", HttpStatus.CONFLICT);
    }
  }
  async findOne(id: string): Promise<ClassDocument> {
    return this.ClassModel.findById(id);
  }
  async findAll(): Promise<ClassDocument[]> {
    return this.ClassModel.find().populate({
      path: "sectionId",
      select: "sectionName",
      model: "Section",
    });
  }

  async update(id: string, UpdateClassDto: ClassDto): Promise<ClassDocument> {
    return this.ClassModel.findByIdAndUpdate(id, UpdateClassDto, { new: true });
  }
  async remove(id: string): Promise<ClassDocument> {
    return this.ClassModel.findByIdAndRemove(id).exec();
  }
  async assignClass(
    classId: string,
    teacherId: string
  ): Promise<AssignDocument> {
    try {
      const teacherAssignClass = await this.AssignModel.findOneAndUpdate(
        { classId: classId },
        { teacherId: teacherId },
        { new: true, upsert: true }
      )
        .populate("classId")
        .populate("teacherId");
      return teacherAssignClass;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        "Teacher is already assigned to a class",
        HttpStatus.CONFLICT
      );
    }
  }
  async assignClasses(
    classId: string,
    teacherId: string
  ): Promise<AssignDocument> {
    try {
      const AssignClassToTeacher = await this.AssignModel.findOneAndUpdate(
        { teacherId: teacherId },
        {
          $addToSet: {
            classId: classId,
          },
        },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      )
        .populate("classId")
        .populate("teacherId");
      return AssignClassToTeacher;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        "Class is already assigned to teacher",
        HttpStatus.CONFLICT
      );
    }
  }
  async getAssignedClassesForTeacher(
    teacherId: string
  ): Promise<AssignDocument[]> {
    return this.AssignModel.find({ teacherId: teacherId }).populate({
      path: "classId",
      populate: {
        path: "sectionId",
        select: "sectionName",
        model: "Section",
      },
    });
  }
  async delete(teacherId: string): Promise<AssignDocument> {
    return this.AssignModel.findByIdAndRemove(teacherId).exec();
  }
  //assign students to class
  async assignStudentsToClass(
    classId: string,
    studentId: string
  ): Promise<AssignStudentDocument> {
    try {
      const AssignStudentToClass =
        await this.AssignStudentModel.findOneAndUpdate(
          { classId: classId },
          {
            $addToSet: {
              studentId: studentId,
            },
          },
          { new: true, upsert: true, setDefaultsOnInsert: true }
        )
          .populate("classId")
          .populate("studentId");
      return AssignStudentToClass;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        "Student is already assigned to a class",
        HttpStatus.CONFLICT
      );
    }
  }
  async getAssignedClassesForStudent(
    studentId: string
  ): Promise<AssignStudentDocument[]> {
    return this.AssignStudentModel.find({ studentId: studentId }).populate(
      "classId"
    );
  }

  async getAssignedStudentsForClass(
    classId: string
  ): Promise<AssignStudentDocument[]> {
    return this.AssignStudentModel.find({ classId: classId }).populate(
      "studentId"
    );
  }
}
