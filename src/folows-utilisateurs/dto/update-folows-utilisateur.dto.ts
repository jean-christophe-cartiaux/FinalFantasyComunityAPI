import { PartialType } from '@nestjs/mapped-types';
import { CreateFolowsUtilisateurDto } from './create-folows-utilisateur.dto';

export class UpdateFolowsUtilisateurDto extends PartialType(CreateFolowsUtilisateurDto) {}
