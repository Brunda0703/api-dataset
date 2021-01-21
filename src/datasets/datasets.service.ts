import { Injectable } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Dataset} from './dataset.model' ;
@Injectable()
export class DatasetService{
    private datasets:Dataset[]=[];
    constructor(@InjectModel('Dataset') private readonly datasetModel:Model<Dataset>
    ){}

    async insertDataset(  BookName: string,Author:string,UserRating:number,Review:number,Price:number,Genre:string)
         {
             console.log("insert");
             const dataId=new Date().toString() ;
             console.log(BookName, Author, UserRating, Review, Price, Genre);
             const newDataset=new this.datasetModel({BookName, Author, UserRating, Review, Price, Genre});
             console.log("next");
             const result =await newDataset.save();
             this.datasets.push(newDataset);
             console.log(result);
             return dataId as string;
         }
 async fetchdataset(){
    const result=await this.datasetModel.find().exec();
        return result.map((data)=>({
        id:data.id,
        BookName:data.BookName,
        Author:data.Author,
        UserRating:data.UserRating,
        Review:data.Review,
        Price:data.Price,
        Genre:data.Genre
    })
    )}
};