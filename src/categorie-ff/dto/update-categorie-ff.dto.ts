import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorieFfDto } from './create-categorie-ff.dto';

export class UpdateCategorieFfDto extends PartialType(CreateCategorieFfDto) {}
