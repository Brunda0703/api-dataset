import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BookService } from './books.service';
import {BookSchema} from './book.model';

@Module({
    imports:[MongooseModule.forFeature([{name:'Book',schema: BookSchema}])],
    controllers:[BooksController],
    providers:[BookService]
})
export class BooksModule{}