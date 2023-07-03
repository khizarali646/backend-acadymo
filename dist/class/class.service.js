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
exports.ClassService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const class_schema_1 = require("../schemas/class.schema");
const mongoose_2 = require("mongoose");
const assignTeacherToClass_schema_1 = require("../schemas/assignTeacherToClass.schema");
const assignStudentToClass_schema_1 = require("../schemas/assignStudentToClass.schema");
let ClassService = class ClassService {
    constructor(ClassModel, AssignModel, AssignStudentModel) {
        this.ClassModel = ClassModel;
        this.AssignModel = AssignModel;
        this.AssignStudentModel = AssignStudentModel;
    }
    async create(classDto) {
        try {
            const className = classDto.className;
            const sectionId = classDto.sectionId;
            console.log({ className });
            return this.ClassModel.findOneAndUpdate({
                className: className,
            }, {
                $addToSet: {
                    sectionId: sectionId,
                },
            }, {
                upsert: true,
                new: true,
                setDefaultsOnInsert: true,
            });
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException("Class Already Registered", common_1.HttpStatus.CONFLICT);
        }
    }
    async findOne(id) {
        return this.ClassModel.findById(id);
    }
    async findAll() {
        return this.ClassModel.find().populate({
            path: "sectionId",
            select: "sectionName",
            model: "Section",
        });
    }
    async update(id, UpdateClassDto) {
        return this.ClassModel.findByIdAndUpdate(id, UpdateClassDto, { new: true });
    }
    async remove(id) {
        return this.ClassModel.findByIdAndRemove(id).exec();
    }
    async assignClass(classId, teacherId) {
        try {
            const teacherAssignClass = await this.AssignModel.findOneAndUpdate({ classId: classId }, { teacherId: teacherId }, { new: true, upsert: true })
                .populate("classId")
                .populate("teacherId");
            return teacherAssignClass;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException("Teacher is already assigned to a class", common_1.HttpStatus.CONFLICT);
        }
    }
    async assignClasses(classId, teacherId) {
        try {
            const AssignClassToTeacher = await this.AssignModel.findOneAndUpdate({ teacherId: teacherId }, {
                $addToSet: {
                    classId: classId,
                },
            }, { new: true, upsert: true, setDefaultsOnInsert: true })
                .populate("classId")
                .populate("teacherId");
            return AssignClassToTeacher;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException("Class is already assigned to teacher", common_1.HttpStatus.CONFLICT);
        }
    }
    async getAssignedClassesForTeacher(teacherId) {
        return this.AssignModel.find({ teacherId: teacherId }).populate({
            path: "classId",
            populate: {
                path: "sectionId",
                select: "sectionName",
                model: "Section",
            },
        });
    }
    async delete(teacherId) {
        return this.AssignModel.findByIdAndRemove(teacherId).exec();
    }
    async assignStudentsToClass(classId, studentId) {
        try {
            const AssignStudentToClass = await this.AssignStudentModel.findOneAndUpdate({ classId: classId }, {
                $addToSet: {
                    studentId: studentId,
                },
            }, { new: true, upsert: true, setDefaultsOnInsert: true })
                .populate("classId")
                .populate("studentId");
            return AssignStudentToClass;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException("Student is already assigned to a class", common_1.HttpStatus.CONFLICT);
        }
    }
};
ClassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(class_schema_1.Class.name)),
    __param(1, (0, mongoose_1.InjectModel)(assignTeacherToClass_schema_1.AssignClass.name)),
    __param(2, (0, mongoose_1.InjectModel)(assignStudentToClass_schema_1.AssignStudentToClass.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ClassService);
exports.ClassService = ClassService;
//# sourceMappingURL=class.service.js.map