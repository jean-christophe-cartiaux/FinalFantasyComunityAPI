import { Injectable } from '@nestjs/common';
import { CreateRegleDto } from './dto/create-regle.dto';
import { UpdateRegleDto } from './dto/update-regle.dto';

@Injectable()
export class ReglesService {
  create(createRegleDto: CreateRegleDto) {
    return 'This action adds a new regle';
  }

  findAll() {
    return `This action returns all regles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} regle`;
  }

  update(id: number, updateRegleDto: UpdateRegleDto) {
    return `This action updates a #${id} regle`;
  }

  remove(id: number) {
    return `This action removes a #${id} regle`;
  }
}
