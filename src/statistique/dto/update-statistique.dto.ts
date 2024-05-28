import { PartialType } from '@nestjs/mapped-types';
import { CreateStatistiqueDto } from './create-statistique.dto';

export class UpdateStatistiqueDto extends PartialType(CreateStatistiqueDto) {}
