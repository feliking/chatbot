import { Body, Controller, Post } from '@nestjs/common';
import { ApplicationService } from '../service/application.service';
import { WhatsappRequestDto } from '../dto/whatsapp.dto';

@Controller('chatbot')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post()
  async createMessage(@Body() datos: WhatsappRequestDto) {
    const result = await this.applicationService.update(datos)
    return {
      reply: result
    }
  }
}
