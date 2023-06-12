"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpotService = void 0;
const common_1 = require("@nestjs/common");
const xlsx = require("xlsx-populate");
const json2xls = require("json2xls");
const fs = require("fs");
let ImpotService = class ImpotService {
    async importJson(impoDto) { }
    async convertJsonToExcel(data, filePath) {
        const xls = json2xls(data);
        fs.writeFileSync(filePath, xls, 'binary');
    }
    async exportData() {
        try {
            const jsonData = [
                {
                    "agent": "agent1",
                    "donotcall": "1",
                    "callmeletter": "2",
                    "intrested": "3",
                    "complaint": "4",
                    "notPickedUp": "5",
                    "disconnected": "6",
                    "hangUp": "7"
                },
                {
                    "agent": "ajent2",
                    "complaint": "4",
                    "notPickedUp": "5",
                    "disconnected": "6",
                    "hangUp": "7"
                },
                {
                    "agent": "ajent3",
                    "donotcall": "1",
                    "callmeletter": "2",
                    "intrested": "3",
                    "hangUp": "7"
                },
                {
                    "agent": "vinod",
                    "donotcall": "1",
                    "callmeletter": "2",
                    "intrested": "3",
                    "complaint": "4",
                }
            ];
            const workbook = await xlsx.fromBlankAsync();
            const sheet = workbook.sheet(0);
            const headerStyle = {
                bold: true,
                border: true,
                fill: {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { rgb: 'FFFFE0' },
                },
            };
            const dataStyle = {
                border: true,
                fill: 'F0E68C'
            };
            const headers = Object.keys(jsonData[0]);
            headers.forEach((header, index) => {
                sheet.cell(1, index + 1).value(header).style(headerStyle);
            });
            for (let i = 0; i < jsonData.length; i++) {
                for (let j = 0; j < headers.length; j++) {
                    const value = jsonData[i][headers[j]] || '';
                    sheet.cell(i + 2, j + 1).value(value).style(dataStyle);
                }
            }
            headers.forEach((_, index) => {
                sheet.column(index + 1).width(15);
            });
            const buffer = await workbook.outputAsync();
            fs.writeFileSync('sheetData.xlsx', buffer, 'binary');
            return { message: 'file is downloaded' };
        }
        catch (e) {
            console.log('Error in exportData:', e);
            throw e;
        }
    }
};
ImpotService = __decorate([
    (0, common_1.Injectable)()
], ImpotService);
exports.ImpotService = ImpotService;
//# sourceMappingURL=impot.service.js.map