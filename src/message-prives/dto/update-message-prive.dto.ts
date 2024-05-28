import { PartialType } from '@nestjs/mapped-types';
import { CreateMessagePriveDto } from './create-message-prive.dto';

export class UpdateMessagePriveDto extends PartialType(CreateMessagePriveDto) {}
