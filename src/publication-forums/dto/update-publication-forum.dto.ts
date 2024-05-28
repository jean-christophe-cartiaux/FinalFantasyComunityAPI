import { PartialType } from '@nestjs/mapped-types';
import { CreatePublicationForumDto } from './create-publication-forum.dto';

export class UpdatePublicationForumDto extends PartialType(CreatePublicationForumDto) {}
