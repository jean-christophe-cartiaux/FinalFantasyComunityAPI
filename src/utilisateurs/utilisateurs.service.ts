import {Injectable, NotFoundException} from '@nestjs/common';
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

    const utilisateur=this._repo.create({email, mdpHash: result, pseudo, prenom});
    return this._repo.save(utilisateur);
  }
  findOne(id:string){
    return this._repo.findOneBy({id});
  }

  find(email: string) {

    return this._repo.find({ where: { email } });
  }
  async profil(body: Partial<Utilisateurs>,id:string):Promise <Partial<Utilisateurs>> {
    const {pseudo,bio,supportPref,idAvatar}= body;
    const idutilisateur = await this.findOne(id)

    if(!idutilisateur){
      throw new NotFoundException('Utilisateurs invalide')
    }
    return body;

  }

  findAll() {
    return `This action returns all utilisateurs`;
  }



  async update(id: string, data:Partial<Utilisateurs>) {
    const utilisateur= await this.findOne(id);
    if(!utilisateur){
      throw new NotFoundException(`Utilisateur avec id ${id} introuvable ༼ つ ◕_◕ ༽つ`);
    }
    Object.assign(utilisateur,data);
    return this._repo.save(utilisateur);
  }

  async remove(id: string) {
    const utilisateurs = await this.findOne(id);
    if(!utilisateurs){
      throw new NotFoundException('Utilisateur introuvable (❁´◡`❁)');
    }
    return this._repo.remove(utilisateurs);
  }
}
