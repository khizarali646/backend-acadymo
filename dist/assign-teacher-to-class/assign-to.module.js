"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignToModule = void 0;
const common_1 = require("@nestjs/common");
const assign_to_service_1 = require("./assign-to.service");
const assign_to_controller_1 = require("./assign-to.controller");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const assignTeacherToClass_schema_1 = require("../schemas/assignTeacherToClass.schema");
const class_schema_1 = require("../schemas/class.schema");
let AssignToModule = class AssignToModule {
};
AssignToModule = __decorate([
    (0, common_1.Module)({
        providers: [assign_to_service_1.AssignToService],
        controllers: [assign_to_controller_1.AssignToController],
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                { name: assignTeacherToClass_schema_1.Assign.name, schema: assignTeacherToClass_schema_1.AssignSchema },
                { name: class_schema_1.Class.name, schema: class_schema_1.ClassSchema },
            ]),
        ],
    })
], AssignToModule);
exports.AssignToModule = AssignToModule;
//# sourceMappingURL=assign-to.module.js.map