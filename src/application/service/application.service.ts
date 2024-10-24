import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utils/firestore';
import { WhatsappRequestDto } from '../dto/whatsapp.dto';

@Injectable()
export class ApplicationService {
  async getMessages(){
    const { getDocuments } = FirestoreService();
    return getDocuments('messages');
  }

  async create(datos: WhatsappRequestDto) {
    const { saveDocument } = FirestoreService();
    await saveDocument('messages', datos);
  }
}
