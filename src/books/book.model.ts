import * as mongoose from 'mongoose';
export const BookSchema=new mongoose.Schema({
     Year: {type:Number,required:true},
     Fiction:{type:Number,required:true},
     Nonfiction:{type:Number,required:true},
});
export interface Book extends mongoose.Document{
    
  
         Year: string;
         Fiction:string;
         Nonfiction:number;
}