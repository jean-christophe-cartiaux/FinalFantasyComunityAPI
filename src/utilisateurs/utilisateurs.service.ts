import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Utilisateurs} from "./entities/utilisateur.entity";
import {AdminModo} from "../admin-modo/entities/admin-modo.entity";
import {AdminModoService} from "../admin-modo/admin-modo.service";
import {validate} from "class-validator";
import {randomBytes, scrypt as _scrypt} from "crypto";
import {promisify} from "util";
const scrypt = promisify(_scrypt);

@Injectable()
export class UtilisateursService {


  constructor(@InjectRepository(Utilisateurs) private _repo: Repository<Utilisateurs>,@InjectRepository  (AdminModo) private _repoRole: Repository<AdminModo>, private service: AdminModoService){}

  async register(body):Promise<Utilisateurs> {
    const {email, result, pseudo,prenom} = body;

    const role = await this._repoRole.createQueryBuilder('AdminModo')
        .where('AdminModo.roles = :role', { role:"warrior of light" }).getOne()

    const utilisateur=this._repo.create({email, mdpHash: result, pseudo, prenom});
    utilisateur.role=role;

    return this._repo.save(utilisateur);
  }
  findOne(id:string){
    return this._repo.findOne({where: {id}});
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



  async update(id: string, data:UpdateUtilisateurDto) {
    const utilisateur= await this.findOne(id);
    const {password} = data;
    console.log(data)
    if(!utilisateur){
      throw new NotFoundException(`Utilisateur avec id ${id} introuvable ༼ つ ◕_◕ ༽つ`);
    }
    const salt = randomBytes(8).toString('hex');
    const hash =(await scrypt(password,salt,32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    Object.assign(utilisateur,data);
    utilisateur.mdpHash=result
    return this._repo.save(utilisateur);
  }

  async remove(id: string) {
    const utilisateurs = await this.findOne(id);
    if(!utilisateurs){
      throw new NotFoundException('Utilisateur introuvable (❁´◡`❁)');
    }
    return this._repo.remove(utilisateurs);
  }

  async assignRole(userId: string, roleId: string): Promise<Utilisateurs> {
    const user = await this._repo.findOne({where:{id:userId}});

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    const role = await this.service.find();
    console.log(role)
    if (!role) {
      throw new NotFoundException(`Role with ID ${roleId} not found`);
    }

    //user.roleId = role.idAdminModo;
    return this._repo.save(user);
  }
}
