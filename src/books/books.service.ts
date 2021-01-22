import { Injectable } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Book} from './book.model' ;
@Injectable()
export class BookService{
    private books:Book[]=[];
    constructor(@InjectModel('Book') private readonly bookModel:Model<Book>
    ){}

    async insertDataset(  Year:number,Fiction:number,Nonfiction:number)
         {
             console.log("insert");
             const dataId=new Date().toString() ;
             console.log(Year, Fiction, Nonfiction);
             const newBook=new this.bookModel({Year, Fiction, Nonfiction});
             console.log("next");
             const result =await newBook.save();
             this.books.push(newBook);
             console.log(result);
             return dataId as string;
         }
 async fetchdataset(){
    const result=await this.bookModel.find().exec();
        return result.map((data)=>({
        id:data.id,
      
        Year:data.Year,
        Fiction:data.Fiction,
        Nonfiction:data.Nonfiction
    })
    )}
};