import { Injectable,BadRequestException,NotFoundException } from '@nestjs/common';
import {UtilisateursService} from "./utilisateurs.service";
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';


const scrypt = promisify(_scrypt);


@Injectable()
export class AuthService {
    constructor(private _utilisateursService: UtilisateursService){}

    async register(body){
        const {email, mdpHash, pseudo, prenom} = body;
        const utilisateur=await this._utilisateursService.find(email);
        if(utilisateur.length){
            throw new BadRequestException(
                'Un compte avec cette email existe déjas '
            )
        }
        const salt = randomBytes(8).toString('hex');
        const hash =(await scrypt(mdpHash,salt,32)) as Buffer;
        const result = salt + '.' + hash.toString('hex');
        const utilisateurs=await this._utilisateursService.register({email,result,pseudo,prenom})

        return utilisateurs
    }

    async login(body){
        const {email,mdpHash}=body
        const [utilisateurs] = await this._utilisateursService.find(email);
        if(!utilisateurs){
            throw new NotFoundException('compte inexistant');
        }

        const [salt,storedHash] = utilisateurs.mdpHash.split('.');
        const hash = (await scrypt(mdpHash,salt,32)) as Buffer;

        if(storedHash !== hash.toString('hex')){
            throw new BadRequestException('Mots de passe invalide ಠ_ಠ')
        }

        return utilisateurs;
    }
}
