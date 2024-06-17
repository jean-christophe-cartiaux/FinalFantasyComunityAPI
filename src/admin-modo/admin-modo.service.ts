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
  const adminModo=this._repo.create(createAdminModoDto);
    return this._repo.save(adminModo);
  }

   find() {
    return this._repo.find()
  }

  findOne(id: number) {

  }
  findRoleByName(role: string) {
  return this._repo.findOne({where:{ roles: role }});
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
