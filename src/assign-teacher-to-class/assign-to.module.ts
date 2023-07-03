// import { Module } from '@nestjs/common';
// import { AssignToService } from './assign-to.service';
// import { AssignToController } from './assign-to.controller';
// import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from "@nestjs/mongoose";
// import {
//   AssignClass,
//   AssignClassSchema,
// } from "../schemas/assignTeacherToClass.schema";
// import { Class, ClassSchema } from "../schemas/class.schema";
//
// @Module({
//   providers: [AssignToService],
//   controllers: [AssignToController],
//   imports: [
//     ConfigModule.forRoot(),
//     MongooseModule.forFeature([
//       { name: AssignClass.name, schema: AssignClassSchema },
//       { name: Class.name, schema: ClassSchema },
//     ]),
//   ],
// })
// export class AssignToModule {}
