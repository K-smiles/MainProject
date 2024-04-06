import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
@Injectable()
export class AppService {
  getHello(): string {
    mongoose.connect
    return 'Hello World!';
  }
}
