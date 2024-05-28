import { Module } from '@nestjs/common';
import { NotificationsUtilisateursService } from './notifications-utilisateurs.service';
import { NotificationsUtilisateursController } from './notifications-utilisateurs.controller';

@Module({
  controllers: [NotificationsUtilisateursController],
  providers: [NotificationsUtilisateursService],
})
export class NotificationsUtilisateursModule {}
