import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificationsUtilisateurDto } from './create-notifications-utilisateur.dto';

export class UpdateNotificationsUtilisateurDto extends PartialType(CreateNotificationsUtilisateurDto) {}
