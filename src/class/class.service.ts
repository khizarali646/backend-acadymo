import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Class, ClassDocument } from "../schemas/class.schema";
import { Model } from "mongoose";
import { ClassDto } from "./class.dto";

@Injectable()
export class ClassService {
  constructor(
    @InjectModel(Class.name) private ClassModel: Model<ClassDocument>
  ) {}
  // async create(classDto: ClassDto): Promise<ClassDocument> {
  //   try {
  //     const createdClass = new this.ClassModel(classDto);
  //     return await createdClass.save();
  //   } catch (e) {
  //     console.log(e);
  //     throw new HttpException("Class Already Register", HttpStatus.CONFLICT);
  //   }
  // }
  async create(classDto: ClassDto): Promise<ClassDocument> {
    try {
      const className = classDto.classname;
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

      /*let existingClass = await this.ClassModel.findOne({ className });

      if (existingClass) {
        existingClass.sectionId.push(...sectionId);
      } else {
        existingClass = new this.ClassModel(classDto);
      }

      return await existingClass.save();*/
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
}
