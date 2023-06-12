import { importDTO } from './dto/impoDto';
export declare class ImpotService {
    importJson(impoDto: importDTO): Promise<void>;
    convertJsonToExcel(data: any, filePath: string): Promise<void>;
    exportData(): Promise<{
        message: string;
    }>;
}
