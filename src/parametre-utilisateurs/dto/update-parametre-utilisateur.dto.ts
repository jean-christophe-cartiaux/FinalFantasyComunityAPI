import { PartialType } from '@nestjs/mapped-types';
import { CreateParametreUtilisateurDto } from './create-parametre-utilisateur.dto';

export class UpdateParametreUtilisateurDto extends PartialType(CreateParametreUtilisateurDto) {}
