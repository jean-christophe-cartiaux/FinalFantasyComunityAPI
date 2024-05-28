import { PartialType } from '@nestjs/mapped-types';
import { CreateRegleDto } from './create-regle.dto';

export class UpdateRegleDto extends PartialType(CreateRegleDto) {}
