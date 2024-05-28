import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentaireActualiteDto } from './create-commentaire-actualite.dto';

export class UpdateCommentaireActualiteDto extends PartialType(CreateCommentaireActualiteDto) {}
