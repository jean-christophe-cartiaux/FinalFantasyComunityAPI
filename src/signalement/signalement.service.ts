import { Injectable } from '@nestjs/common';
import { CreateSignalementDto } from './dto/create-signalement.dto';
import { UpdateSignalementDto } from './dto/update-signalement.dto';

@Injectable()
export class SignalementService {
  create(createSignalementDto: CreateSignalementDto) {
    return 'This action adds a new signalement';
  }

  findAll() {
    return `This action returns all signalement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signalement`;
  }

  update(id: number, updateSignalementDto: UpdateSignalementDto) {
    return `This action updates a #${id} signalement`;
  }

  remove(id: number) {
    return `This action removes a #${id} signalement`;
  }
}
