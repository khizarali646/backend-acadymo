import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types, Document } from "mongoose";
import { Subject } from "./subject.schema";

export type AssignSubjectDocument = AssignSubject & Document;
@Schema()
export class AssignSubject {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }] })
  subjectId: Types.ObjectId;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] })
  teacherId: Types.ObjectId;
}
export const AssignSubjectSchema = SchemaFactory.createForClass(AssignSubject);

export const AssignSubjectModel = mongoose.model<AssignSubjectDocument>(
  "AssignSubject",
  AssignSubjectSchema
);
