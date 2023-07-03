import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types, Document } from "mongoose";

export type AssignStudentDocument = AssignStudentToClass & Document;

@Schema()
export class AssignStudentToClass {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }] })
  classId: Types.ObjectId;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] })
  studentId: Types.ObjectId;
  @Prop()
  breed: string;
}

export const AssignStudentSchema =
  SchemaFactory.createForClass(AssignStudentToClass);
// export const AssignStudentModel = mongoose.model<AssignStudentDocument>(
//   "AssignStudentToClass",
//   AssignStudentSchema
// );
