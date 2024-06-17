import { Injectable,BadRequestException,NotFoundException } from '@nestjs/common';
import {UtilisateursService} from "./utilisateurs.service";
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import * as process from "node:process";
const jwt = require('jsonwebtoken');
import{Response} from "express";

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

    async login(body: any){
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
// creation token
        const id = utilisateurs.id;
        const payload={
            utilisateurId:id,
            pseudo: utilisateurs.pseudo,
            roleId: utilisateurs.roleId
        };
        const options ={
            expiresIn: '2d'
        }
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign(payload, secret,options);
        const utilisateurJwt= ({token,id});

        return utilisateurJwt
        // if (utilisateurJwt){
        //     res.setHeader('Authorization', `Bearer ${token}`);
        //     res.status(200).json({token})
        // }
        // if(!utilisateurs){
        //     res.status(404).json({message:`L'utilisateur avec l'émail : ${email}n'existe pas ¯\\_(ツ)_/¯`})
        // }
        // return utilisateurJwt;
    }
}
