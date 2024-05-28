import { Injectable } from '@nestjs/common';
import { CreateCategorieFfDto } from './dto/create-categorie-ff.dto';
import { UpdateCategorieFfDto } from './dto/update-categorie-ff.dto';

@Injectable()
export class CategorieFfService {
  create(createCategorieFfDto: CreateCategorieFfDto) {
    return 'This action adds a new categorieFf';
  }

  findAll() {
    return `This action returns all categorieFf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categorieFf`;
  }

  update(id: number, updateCategorieFfDto: UpdateCategorieFfDto) {
    return `This action updates a #${id} categorieFf`;
  }

  remove(id: number) {
    return `This action removes a #${id} categorieFf`;
  }
}
