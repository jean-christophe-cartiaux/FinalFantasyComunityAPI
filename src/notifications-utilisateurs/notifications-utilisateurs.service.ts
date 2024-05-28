import { Injectable } from '@nestjs/common';
import { CreateNotificationsUtilisateurDto } from './dto/create-notifications-utilisateur.dto';
import { UpdateNotificationsUtilisateurDto } from './dto/update-notifications-utilisateur.dto';

@Injectable()
export class NotificationsUtilisateursService {
  create(createNotificationsUtilisateurDto: CreateNotificationsUtilisateurDto) {
    return 'This action adds a new notificationsUtilisateur';
  }

  findAll() {
    return `This action returns all notificationsUtilisateurs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificationsUtilisateur`;
  }

  update(id: number, updateNotificationsUtilisateurDto: UpdateNotificationsUtilisateurDto) {
    return `This action updates a #${id} notificationsUtilisateur`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificationsUtilisateur`;
  }
}
