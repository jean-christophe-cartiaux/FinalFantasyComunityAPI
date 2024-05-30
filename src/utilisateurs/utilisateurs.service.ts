import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Utilisateurs} from "./entities/utilisateur.entity";


@Injectable()
export class UtilisateursService {

  constructor(@InjectRepository(Utilisateurs) private _repo: Repository<Utilisateurs>){}

  register(body):Promise<Utilisateurs> {
    const {email, result, pseudo, prenom} = body;
    console.log(result)
    const utilisateur=this._repo.create({email, mdpHash: result, pseudo, prenom});
    return this._repo.save(utilisateur);
  }
  find(email: string) {

    return this._repo.find({ where: { email } });
  }

  findAll() {
    return `This action returns all utilisateurs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} utilisateur`;
  }

  update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    return `This action updates a #${id} utilisateur`;
  }

  remove(id: number) {
    return `This action removes a #${id} utilisateur`;
  }
}
