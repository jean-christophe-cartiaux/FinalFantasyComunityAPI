import { Injectable } from '@nestjs/common';
import { CreateCommentaireActualiteDto } from './dto/create-commentaire-actualite.dto';
import { UpdateCommentaireActualiteDto } from './dto/update-commentaire-actualite.dto';

@Injectable()
export class CommentaireActualitesService {
  create(createCommentaireActualiteDto: CreateCommentaireActualiteDto) {
    return 'This action adds a new commentaireActualite';
  }

  findAll() {
    return `This action returns all commentaireActualites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentaireActualite`;
  }

  update(id: number, updateCommentaireActualiteDto: UpdateCommentaireActualiteDto) {
    return `This action updates a #${id} commentaireActualite`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentaireActualite`;
  }
}
