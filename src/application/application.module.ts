import { Module } from '@nestjs/common';
import { ApplicationService } from './service/application.service';
import { ApplicationController } from './controller/application.controller';

@Module({
  imports: [],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
