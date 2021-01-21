import { DatasetService } from './datasets.service';
export declare class DatasetsController {
    private readonly datasetsService;
    constructor(datasetsService: DatasetService);
    addDataset(databookname: string, dataauthor: string, datauserrating: number, datareview: number, dataprice: number, datagenre: string): Promise<{
        id: string;
    }>;
    getAlldatas(): Promise<{
        id: any;
        BookName: string;
        Author: string;
        UserRating: number;
        Review: number;
        Price: number;
        Genre: string;
    }[]>;
}
