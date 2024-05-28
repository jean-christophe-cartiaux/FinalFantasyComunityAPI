import { Injectable } from '@nestjs/common';
import { CreateActualiteDto } from './dto/create-actualite.dto';
import { UpdateActualiteDto } from './dto/update-actualite.dto';

@Injectable()
export class ActualitesService {
  create(createActualiteDto: CreateActualiteDto) {
    return 'This action adds a new actualite';
  }

  findAll() {
    return `This action returns all actualites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actualite`;
  }

  update(id: number, updateActualiteDto: UpdateActualiteDto) {
    return `This action updates a #${id} actualite`;
  }

  remove(id: number) {
    return `This action removes a #${id} actualite`;
  }
}
