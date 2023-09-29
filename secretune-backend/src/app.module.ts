import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './modules/message/message.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/secretune'),
      MessageModule,
      UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
