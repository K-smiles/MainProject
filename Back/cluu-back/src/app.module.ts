import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb+srv://lu452126871:12345@cluster0.w7qj7ix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule { }
