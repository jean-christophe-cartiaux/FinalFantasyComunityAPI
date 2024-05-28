import { Injectable } from '@nestjs/common';
import { CreateParametreUtilisateurDto } from './dto/create-parametre-utilisateur.dto';
import { UpdateParametreUtilisateurDto } from './dto/update-parametre-utilisateur.dto';

@Injectable()
export class ParametreUtilisateursService {
  create(createParametreUtilisateurDto: CreateParametreUtilisateurDto) {
    return 'This action adds a new parametreUtilisateur';
  }

  findAll() {
    return `This action returns all parametreUtilisateurs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parametreUtilisateur`;
  }

  update(id: number, updateParametreUtilisateurDto: UpdateParametreUtilisateurDto) {
    return `This action updates a #${id} parametreUtilisateur`;
  }

  remove(id: number) {
    return `This action removes a #${id} parametreUtilisateur`;
  }
}
