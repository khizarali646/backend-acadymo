// import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
// import { InjectModel } from "@nestjs/mongoose";
//
// import { Model } from "mongoose";
// import {
//   AssignStudentDocument,
//   AssignStudentToClass,
// } from "../schemas/assignStudentToClass.schema";
//
// @Injectable()
// export class AssignClassToStudentService {
//   constructor(
//     @InjectModel(AssignStudentToClass.name)
//     readonly AssignModel: Model<AssignStudentDocument>
//   ) {}
//
//   async assignClass(
//     classId: string,
//     studentId: string
//   ): Promise<AssignStudentDocument> {
//     try {
//       const AssignStudentToClass = await this.AssignModel.findOneAndUpdate(
//         { classId: classId },
//         {
//           $addToSet: {
//             studentId: studentId,
//           },
//         },
//         {
//           new: true,
//           upsert: true,
//           setDefaultsOnInsert: true,
//         }
//       )
//         .populate("classId")
//         .populate("studentId");
//       return AssignStudentToClass;
//     } catch (e) {
//       console.log(e);
//       throw new HttpException(
//         "Class is already assigned to a student",
//         HttpStatus.CONFLICT
//       );
//     }
//   }
//   async getAssignedClassesForStudent(
//     studentId: string
//   ): Promise<AssignStudentDocument[]> {
//     return this.AssignModel.find({ studentId: studentId }).populate("classId");
//   }
//
//   async getAssignedStudentsForClass(
//     classId: string
//   ): Promise<AssignStudentDocument[]> {
//     return this.AssignModel.find({ classId: classId }).populate("studentId");
//   }
// }
