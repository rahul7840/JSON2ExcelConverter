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
exports.ImpotController = void 0;
const common_1 = require("@nestjs/common");
const impot_service_1 = require("./impot.service");
const swagger_1 = require("@nestjs/swagger");
let ImpotController = class ImpotController {
    constructor(impoService) {
        this.impoService = impoService;
    }
    addJson(impoDto) {
        return this.impoService.importJson(impoDto);
    }
    async exportData() {
        return await this.impoService.exportData();
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    (0, swagger_1.ApiOperation)({ summary: 'Insert a json' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ImpotController.prototype, "addJson", null);
__decorate([
    (0, common_1.Get)('export'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImpotController.prototype, "exportData", null);
ImpotController = __decorate([
    (0, common_1.Controller)('jsontoexcel'),
    __metadata("design:paramtypes", [impot_service_1.ImpotService])
], ImpotController);
exports.ImpotController = ImpotController;
//# sourceMappingURL=impot.controller.js.map