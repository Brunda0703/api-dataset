import { Controller,Post,Body,Get } from "@nestjs/common";
import {DatasetService} from './datasets.service'
@Controller('datasets')
export class DatasetsController{
    constructor(private readonly datasetsService: DatasetService){}
    @Post()
    async addDataset(
    @Body('BookName') databookname:string,
    @Body('Author')dataauthor:string,
    @Body('UserRating')datauserrating:number, 
    @Body('Reviews')datareview:number, 
    @Body('Price')dataprice:number, 
    @Body('Genre')datagenre:string,
     ){
       const generatedid= await this.datasetsService.insertDataset(
           databookname,
           dataauthor,
           datauserrating,
           datareview,
           dataprice,
           datagenre);
        console.log("generated" ,generatedid);
        return {id:generatedid};
    }
    @Get()
    async getAlldatas(){
        const datasets=await this.datasetsService.fetchdataset();
        return datasets;
    }
}
