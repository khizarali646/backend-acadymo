import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes, Types } from "mongoose";
import { Campus } from "./campus.schema";
import * as mongoose from "mongoose";
import { Section } from "./section.schema";

export type ClassDocument = Class & Document;

@Schema()
export class Class {
  @Prop({ required: true })
  className: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: "Campus" })
  campusId: Campus;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: "Section" } })
  sectionId: Types.ObjectId;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
