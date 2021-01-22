import * as mongoose from 'mongoose';
export const DatasetSchema=new mongoose.Schema({
     BookName: {type:String,required:true},
     Author:{type:String,required:true},
     UserRating:{type:Number,required:true},
     Review:{type:Number,required:true},
     Price:{type:Number,required:true},
     Genre:{type:String,required:true}
});
export interface Dataset extends mongoose.Document{
    
  
         BookName: string;
         Author:string;
         UserRating:number;
         Review:number;
         Price:number;
         Genre:string;
}