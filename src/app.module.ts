import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { validationSchema } from './config/validationSchema';


console.log(`${__dirname}/config/env/.${process.env.NODE_ENV}.env`);
@Module({
  imports: [UserModule, ConfigModule.forRoot({
    envFilePath:[`${__dirname}/config/env/.${process.env.NODE_ENV}.env`], // 파일 경로 설정
    isGlobal:true, // 전역 모듈로 동작하게 해서 어느 모듈에서나 쓸 수 있게 설정
    validationSchema
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
