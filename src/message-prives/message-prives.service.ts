import { Injectable } from '@nestjs/common';
import { CreateMessagePriveDto } from './dto/create-message-prive.dto';
import { UpdateMessagePriveDto } from './dto/update-message-prive.dto';

@Injectable()
export class MessagePrivesService {
  create(createMessagePriveDto: CreateMessagePriveDto) {
    return 'This action adds a new messagePrive';
  }

  findAll() {
    return `This action returns all messagePrives`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messagePrive`;
  }

  update(id: number, updateMessagePriveDto: UpdateMessagePriveDto) {
    return `This action updates a #${id} messagePrive`;
  }

  remove(id: number) {
    return `This action removes a #${id} messagePrive`;
  }
}
