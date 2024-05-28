import { Injectable } from '@nestjs/common';
import { CreateAdminModoDto } from './dto/create-admin-modo.dto';
import { UpdateAdminModoDto } from './dto/update-admin-modo.dto';

@Injectable()
export class AdminModoService {
  create(createAdminModoDto: CreateAdminModoDto) {
    return 'This action adds a new adminModo';
  }

  findAll() {
    return `This action returns all adminModo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminModo`;
  }

  update(id: number, updateAdminModoDto: UpdateAdminModoDto) {
    return `This action updates a #${id} adminModo`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminModo`;
  }
}
