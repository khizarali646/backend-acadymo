import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";

export type ClassDocument = Class & Document;

@Schema()
export class Class {
  @Prop({ required: true })
  className: string;

  // @Prop({
  //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Section" }],
  //   validate: {
  //     validator: async function (sectionId: Types.ObjectId[]) {
  //       const count = await this.constructor.countDocuments({
  //         className: this.className,
  //         sectionId: { $in: sectionId },
  //       });
  //       return count === 0;
  //     },
  //     message: "Class with the same section already exists",
  //   },
  // })
  @Prop({ type: [{ type: Types.ObjectId, ref: "Section" }] })
  sectionId: Types.ObjectId[];
}

export const ClassSchema = SchemaFactory.createForClass(Class);
