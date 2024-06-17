import {IsEmail, IsStrongPassword, IsString, IsOptional, IsNumber} from "class-validator";
import {Utilisateurs} from "../entities/utilisateur.entity";

export class UpdateUtilisateurDto  {

    @IsString()
    @IsOptional()
    pseudo:string

    @IsString()
    @IsOptional()
    prenom:string

    @IsString()
    @IsOptional()
    nom:string


    @IsEmail()
    @IsOptional()
    email:string

    @IsString()
    @IsOptional()
    password:string

    @IsString()
    @IsOptional()
    bio:string

    @IsNumber()
    @IsOptional()
    idAvatar: number

    @IsString()
    @IsOptional()
    supportPref:string

    @IsString()
    @IsOptional()
    roleId:string

    // toEntity(): Utilisateurs{
    //     const u = new Utilisateurs();
    //     u.prenom=this.prenom;
    //     u.nom=this.nom;
    //     u.pseudo = this.pseudo;
    //     u.email=this.email;
    //     u.bio = this.bio;
    //     u.supportPref=this.supportPref;
    //     u.idAvatar=this.idAvatar;
    //     u.roleId=this.roleId;
    //     u.mdpHash=this.mdpHash;
    //     return u;
    // }
}
