import * as mongoose from 'mongoose';
export declare const DatasetSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface Dataset extends mongoose.Document {
    BookName: string;
    Author: string;
    UserRating: number;
    Review: number;
    Price: number;
    Genre: string;
}
