import { Injectable } from '@nestjs/common';
import { CreateLikesActualiteDto } from './dto/create-likes-actualite.dto';
import { UpdateLikesActualiteDto } from './dto/update-likes-actualite.dto';

@Injectable()
export class LikesActualitesService {
  create(createLikesActualiteDto: CreateLikesActualiteDto) {
    return 'This action adds a new likesActualite';
  }

  findAll() {
    return `This action returns all likesActualites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} likesActualite`;
  }

  update(id: number, updateLikesActualiteDto: UpdateLikesActualiteDto) {
    return `This action updates a #${id} likesActualite`;
  }

  remove(id: number) {
    return `This action removes a #${id} likesActualite`;
  }
}
