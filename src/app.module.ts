import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatasetsModule } from './datasets/datasets.module';

@Module({
  imports: [DatasetsModule,
    MongooseModule.forRoot('mongodb+srv://brunda:b070310b@cluster0-eocz5.mongodb.net/apidataset?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
