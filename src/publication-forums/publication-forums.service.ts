import { Injectable } from '@nestjs/common';
import { CreatePublicationForumDto } from './dto/create-publication-forum.dto';
import { UpdatePublicationForumDto } from './dto/update-publication-forum.dto';

@Injectable()
export class PublicationForumsService {
  create(createPublicationForumDto: CreatePublicationForumDto) {
    return 'This action adds a new publicationForum';
  }

  findAll() {
    return `This action returns all publicationForums`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publicationForum`;
  }

  update(id: number, updatePublicationForumDto: UpdatePublicationForumDto) {
    return `This action updates a #${id} publicationForum`;
  }

  remove(id: number) {
    return `This action removes a #${id} publicationForum`;
  }
}
