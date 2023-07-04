import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types, Document } from "mongoose";
import { Class } from "./class.schema";

export type AssignDocument = AssignClass & Document;
@Schema()
export class AssignClass {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }] })
  classId: Types.ObjectId;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] })
  teacherId: Types.ObjectId;
}
export const AssignClassSchema = SchemaFactory.createForClass(AssignClass);

export const AssignModel = mongoose.model<AssignDocument>(
  "AssignClass",
  AssignClassSchema
);
