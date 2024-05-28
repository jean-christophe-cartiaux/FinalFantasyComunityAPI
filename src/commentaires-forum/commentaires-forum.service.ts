import { Injectable } from '@nestjs/common';
import { CreateCommentairesForumDto } from './dto/create-commentaires-forum.dto';
import { UpdateCommentairesForumDto } from './dto/update-commentaires-forum.dto';

@Injectable()
export class CommentairesForumService {
  create(createCommentairesForumDto: CreateCommentairesForumDto) {
    return 'This action adds a new commentairesForum';
  }

  findAll() {
    return `This action returns all commentairesForum`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentairesForum`;
  }

  update(id: number, updateCommentairesForumDto: UpdateCommentairesForumDto) {
    return `This action updates a #${id} commentairesForum`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentairesForum`;
  }
}
