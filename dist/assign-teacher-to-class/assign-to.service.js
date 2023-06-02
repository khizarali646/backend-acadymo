"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignToService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const assignTeacherToClass_schema_1 = require("../schemas/assignTeacherToClass.schema");
let AssignToService = class AssignToService {
    constructor(AssignModel) {
        this.AssignModel = AssignModel;
    }
    async assignClass(classId, teacherId) {
        try {
            const teacherAssignClass = await this.AssignModel.findOneAndUpdate({ classId: classId }, { teacherId: teacherId }, { new: true, upsert: true })
                .populate('classId')
                .populate('teacherId');
            return teacherAssignClass;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException('Teacher is already assigned to a class', common_1.HttpStatus.CONFLICT);
        }
    }
    async asignClassess(classId, teacherId, sectionName) {
        try {
            const teacherAssignClass = await this.AssignModel.findOneAndUpdate({ classId: classId, sectionName: sectionName }, { teacherId: teacherId }, { new: true, upsert: true })
                .populate("classId")
                .populate("teacherId");
            return teacherAssignClass;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException("Teacher is already assigned to a class", common_1.HttpStatus.CONFLICT);
        }
    }
    async getAssignedClassesForTeacher(teacherId) {
        return this.AssignModel.find({ teacherId: teacherId }).populate('classId');
    }
    async delete(teacherId) {
        return this.AssignModel.findByIdAndRemove(teacherId).exec();
    }
};
AssignToService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(assignTeacherToClass_schema_1.Assign.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AssignToService);
exports.AssignToService = AssignToService;
//# sourceMappingURL=assign-to.service.js.map