import { ImpotService } from './impot.service';
import { importDTO } from './dto/impoDto';
export declare class ImpotController {
    private readonly impoService;
    constructor(impoService: ImpotService);
    addJson(impoDto: importDTO): Promise<void>;
    exportData(): Promise<{
        message: string;
    }>;
}
