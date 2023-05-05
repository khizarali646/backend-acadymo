import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types, Document } from "mongoose";

export type AssignClassDocument = AssignClass & Document;

@Schema()
export class AssignClass {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }] })
  classId: Types.ObjectId;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] })
  studentId: Types.ObjectId;

  @Prop()
  breed: string;
}

export const AssignClassSchema = SchemaFactory.createForClass(AssignClass);
