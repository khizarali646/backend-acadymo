// import { Module } from "@nestjs/common";
// import { AssignClassToStudentService } from "./assign-class-to-student.service";
// import { AssignClassToStudentController } from "./assign-class-to-student.controller";
// import { ConfigModule } from "@nestjs/config";
// import { MongooseModule } from "@nestjs/mongoose";
// import { Class, ClassSchema } from "../schemas/class.schema";
// import {
//   AssignStudentSchema,
//   AssignStudentToClass,
// } from "../schemas/assignStudentToClass.schema";
//
// @Module({
//   providers: [AssignClassToStudentService],
//   controllers: [AssignClassToStudentController],
//   imports: [
//     ConfigModule.forRoot(),
//     MongooseModule.forFeature([
//       { name: AssignStudentToClass.name, schema: AssignStudentSchema },
//       { name: Class.name, schema: ClassSchema },
//     ]),
//   ],
// })
// export class AssignClassToStudentModule {}
