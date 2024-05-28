import { Injectable } from '@nestjs/common';
import { CreateFolowsUtilisateurDto } from './dto/create-folows-utilisateur.dto';
import { UpdateFolowsUtilisateurDto } from './dto/update-folows-utilisateur.dto';

@Injectable()
export class FolowsUtilisateursService {
  create(createFolowsUtilisateurDto: CreateFolowsUtilisateurDto) {
    return 'This action adds a new folowsUtilisateur';
  }

  findAll() {
    return `This action returns all folowsUtilisateurs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} folowsUtilisateur`;
  }

  update(id: number, updateFolowsUtilisateurDto: UpdateFolowsUtilisateurDto) {
    return `This action updates a #${id} folowsUtilisateur`;
  }

  remove(id: number) {
    return `This action removes a #${id} folowsUtilisateur`;
  }
}
