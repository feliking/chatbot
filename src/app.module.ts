import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), ApplicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
