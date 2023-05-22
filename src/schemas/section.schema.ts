import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SectionDocument = Section & Document;

@Schema()
export class Section {
  @Prop({ required: true, unique: true })
  sectionName: string;
}

export const SectionSchema = SchemaFactory.createForClass(Section);
