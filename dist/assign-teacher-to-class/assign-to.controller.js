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
exports.AssignToController = void 0;
const common_1 = require("@nestjs/common");
const assign_to_service_1 = require("./assign-to.service");
let AssignToController = class AssignToController {
    constructor(assignService) {
        this.assignService = assignService;
    }
    async assignClass(classId, teacherId) {
        const teacherAssignClass = await this.assignService.assignClass(classId, teacherId);
        return { teacherAssignClass };
    }
    async assignClasses(classIds, teacherId) {
        try {
            const teacherAssignments = [];
            if (!Array.isArray(classIds)) {
                console.log(classIds);
                throw new common_1.HttpException("classIds must be an array", common_1.HttpStatus.BAD_REQUEST);
            }
            for (const classId of classIds) {
                const teacherAssignment = await this.assignService.asignClassess(classId, teacherId);
                teacherAssignments.push(teacherAssignment);
            }
            return { teacherAssignments };
        }
        catch (e) {
            console.log(e);
        }
    }
    async getAssignedClassesForTeacher(teacherId) {
        return this.assignService.getAssignedClassesForTeacher(teacherId);
    }
    async delete(teacherId) {
        return this.assignService.delete(teacherId);
    }
};
__decorate([
    (0, common_1.Post)("/update"),
    __param(0, (0, common_1.Body)("classId")),
    __param(1, (0, common_1.Body)("teacherId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AssignToController.prototype, "assignClass", null);
__decorate([
    (0, common_1.Post)("/assign"),
    __param(0, (0, common_1.Body)("classIds")),
    __param(1, (0, common_1.Body)("teacherId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], AssignToController.prototype, "assignClasses", null);
__decorate([
    (0, common_1.Get)("teacher/:teacherId"),
    __param(0, (0, common_1.Param)("teacherId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssignToController.prototype, "getAssignedClassesForTeacher", null);
__decorate([
    (0, common_1.Delete)("/teacher/:teacherId"),
    __param(0, (0, common_1.Param)("teacherId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssignToController.prototype, "delete", null);
AssignToController = __decorate([
    (0, common_1.Controller)("assign-teacher-to-class"),
    __metadata("design:paramtypes", [assign_to_service_1.AssignToService])
], AssignToController);
exports.AssignToController = AssignToController;
//# sourceMappingURL=assign-to.controller.js.map