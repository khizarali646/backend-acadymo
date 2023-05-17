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
};
__decorate([
    (0, common_1.Post)('/create'),
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
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, class_dto_1.ClassDto]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "remove", null);
ClassController = __decorate([
    (0, common_1.Controller)('class'),
    __metadata("design:paramtypes", [class_service_1.ClassService])
], ClassController);
exports.ClassController = ClassController;
//# sourceMappingURL=class.controller.js.map