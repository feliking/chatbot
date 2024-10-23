import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utils/firestore';

@Injectable()
export class AppService {
  async getMessages(){
    const { getDocuments } = FirestoreService();
    return getDocuments('messages');
  }

  async create(datos: any) {
    const { saveDocument } = FirestoreService();
    await saveDocument('categories', datos);
  }

  async update(datos: any, id: string) {
    const { updateDocument } = FirestoreService();
    await updateDocument('categories', id, datos);
  }

  async delete(id: string) {
    const { deleteDocument } = FirestoreService();
    return await deleteDocument('categories', id);
  }
}
