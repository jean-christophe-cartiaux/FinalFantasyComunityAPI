import { PartialType } from '@nestjs/mapped-types';
import { CreateLikesActualiteDto } from './create-likes-actualite.dto';

export class UpdateLikesActualiteDto extends PartialType(CreateLikesActualiteDto) {}
