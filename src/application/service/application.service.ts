import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utils/firestore';
import { WhatsappRequestDto } from '../dto/whatsapp.dto';
import * as dayjs from 'dayjs';

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

  async update(datos: WhatsappRequestDto) {
    const { updateDocument, getDocument } = FirestoreService();
    const ID = 'fgmhUM3bwR5fvpKpslFU'
    const currentState: any = await getDocument('messages', ID)
    datos.timestamps = dayjs().unix()
    await updateDocument('messages', ID, {
      participantes: [...currentState.participantes, datos]
    })
    return 'Gracias por participar'
  }
}
