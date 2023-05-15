import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SectionDocument = Section & Document;

@Schema()
export class Section {
  @Prop({ required: true })
  sectionName: string;
}

export const sectionSchema = SchemaFactory.createForClass(Section);
