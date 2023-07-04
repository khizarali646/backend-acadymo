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
exports.ClassController = void 0;
const common_1 = require("@nestjs/common");
const class_dto_1 = require("./class.dto");
const class_service_1 = require("./class.service");
let ClassController = class ClassController {
    constructor(classService) {
        this.classService = classService;
    }
    async create(createClassDto) {
        try {
            return this.classService.create(createClassDto);
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        return this.classService.findAll();
    }
    async findOne(id) {
        return this.classService.findOne(id);
    }
    async update(id, updateClassDto) {
        return this.classService.update(id, updateClassDto);
    }
    async remove(id) {
        return this.classService.remove(id);
    }
    async assignClass(classId, teacherId) {
        const teacherAssignClass = await this.classService.assignClass(classId, teacherId);
        return { teacherAssignClass };
    }
    async assignClasses(classIds, teacherId) {
        try {
            const AssignedClasses = [];
            if (!Array.isArray(classIds)) {
                throw new common_1.HttpException("classIds must be an array", common_1.HttpStatus.BAD_REQUEST);
            }
            for (const classId of classIds) {
                const teacherClass = await this.classService.assignClasses(classId, teacherId);
                AssignedClasses.push(teacherClass);
            }
            return { AssignedClasses };
        }
        catch (e) {
            console.log(e);
        }
    }
    async getAssignedClassesForTeacher(teacherId) {
        return this.classService.getAssignedClassesForTeacher(teacherId);
    }
    async delete(teacherId) {
        return this.classService.delete(teacherId);
    }
    async assignStudentsToClass(classIds, studentId) {
        try {
            const StudentClasses = [];
            if (!Array.isArray(classIds)) {
                throw new common_1.HttpException("classIds must be an array", common_1.HttpStatus.BAD_REQUEST);
            }
            for (const classId of classIds) {
                const studentClass = await this.classService.assignStudentsToClass(classId, studentId);
                StudentClasses.push(studentClass);
            }
            return { StudentClasses };
        }
        catch (e) {
            console.log(e);
        }
    }
    async getAssignedClassesForStudent(studentId) {
        return this.classService.getAssignedClassesForStudent(studentId);
    }
    async getAssignedStudentsForClass(classId) {
        return this.classService.getAssignedStudentsForClass(classId);
    }
};
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [class_dto_1.ClassDto]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, class_dto_1.ClassDto]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)("/teacher/update"),
    __param(0, (0, common_1.Body)("classId")),
    __param(1, (0, common_1.Body)("teacherId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "assignClass", null);
__decorate([
    (0, common_1.Post)("/assign/teacher"),
    __param(0, (0, common_1.Body)("classIds")),
    __param(1, (0, common_1.Body)("teacherId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "assignClasses", null);
__decorate([
    (0, common_1.Get)("teacher/:teacherId"),
    __param(0, (0, common_1.Param)("teacherId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "getAssignedClassesForTeacher", null);
__decorate([
    (0, common_1.Delete)("/teacher/:teacherId"),
    __param(0, (0, common_1.Param)("teacherId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)("assign/student"),
    __param(0, (0, common_1.Body)("classIds")),
    __param(1, (0, common_1.Body)("studentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "assignStudentsToClass", null);
__decorate([
    (0, common_1.Get)("student/:studentId"),
    __param(0, (0, common_1.Param)("studentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "getAssignedClassesForStudent", null);
__decorate([
    (0, common_1.Get)("class/:classId"),
    __param(0, (0, common_1.Param)("classId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "getAssignedStudentsForClass", null);
ClassController = __decorate([
    (0, common_1.Controller)("class"),
    __metadata("design:paramtypes", [class_service_1.ClassService])
], ClassController);
exports.ClassController = ClassController;
//# sourceMappingURL=class.controller.js.map