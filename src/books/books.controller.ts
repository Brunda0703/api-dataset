import { Controller,Post,Body,Get } from "@nestjs/common";
import {BookService} from './books.service'
@Controller('books')
export class BooksController{
    constructor(private readonly booksService: BookService){}
    @Post()
    async addDataset(
  
    @Body('Year')datayear:number, 
    @Body('Fiction')datafiction:number, 
    @Body('Nonfiction')datanonfiction:number, 
   
     ){
       const generatedid= await this.booksService.insertDataset(
        datayear,
        datafiction,
        datanonfiction,
         );
        console.log("generated" ,generatedid);
        return {id:generatedid};
    }
    @Get()
    async getAlldatas(){
        const books=await this.booksService.fetchdataset();
        return books;
    }
}
