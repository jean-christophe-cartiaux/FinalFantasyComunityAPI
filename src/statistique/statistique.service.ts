import { Injectable } from '@nestjs/common';
import { CreateStatistiqueDto } from './dto/create-statistique.dto';
import { UpdateStatistiqueDto } from './dto/update-statistique.dto';

@Injectable()
export class StatistiqueService {
  create(createStatistiqueDto: CreateStatistiqueDto) {
    return 'This action adds a new statistique';
  }

  findAll() {
    return `This action returns all statistique`;
  }

  findOne(id: number) {
    return `This action returns a #${id} statistique`;
  }

  update(id: number, updateStatistiqueDto: UpdateStatistiqueDto) {
    return `This action updates a #${id} statistique`;
  }

  remove(id: number) {
    return `This action removes a #${id} statistique`;
  }
}
