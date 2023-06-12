"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpotModule = void 0;
const common_1 = require("@nestjs/common");
const impot_controller_1 = require("./impot.controller");
const mongoose_1 = require("@nestjs/mongoose");
const impot_service_1 = require("./impot.service");
let ImpotModule = class ImpotModule {
};
ImpotModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.SECRET)
        ],
        controllers: [impot_controller_1.ImpotController],
        providers: [impot_service_1.ImpotService]
    })
], ImpotModule);
exports.ImpotModule = ImpotModule;
//# sourceMappingURL=impot.module.js.map