import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    //Connect to MongoDB
    // 1. Tell Nest to start Mongoose and open a connection
    //Result: One MongoDB connection shared across the whole app.
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    // 2. Import the module that contains the controller/service
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
