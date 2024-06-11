import { Injectable } from '@nestjs/common';
import { CreateAdminModoDto } from './dto/create-admin-modo.dto';
import { UpdateAdminModoDto } from './dto/update-admin-modo.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {AdminModo} from "./entities/admin-modo.entity";
import {Repository} from "typeorm";

@Injectable()
export class AdminModoService {
  constructor (@InjectRepository (AdminModo) private _repo: Repository<AdminModo>){}
  create(createAdminModoDto: CreateAdminModoDto) {
    return 'This action adds a new adminModo';
  }

   find() {
    return this._repo.find()
  }

  findOne(id: number) {

  }
  findAdmin() {
    return
  }

  update(id: number, updateAdminModoDto: UpdateAdminModoDto) {
    return `This action updates a #${id} adminModo`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminModo`;
  }
}
