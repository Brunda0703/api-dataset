import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { DatasetsController } from './datasets.controller';
import { DatasetService } from './datasets.service';
import {DatasetSchema} from './dataset.model';

@Module({
    imports:[MongooseModule.forFeature([{name:'Dataset',schema: DatasetSchema}])],
    controllers:[DatasetsController],
    providers:[DatasetService]
})
export class DatasetsModule{}