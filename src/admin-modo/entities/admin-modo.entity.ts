import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { Exclude } from "class-transformer";
import { IsOptional } from "class-validator";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";
 // Importez l'entité Utilisateurs

@Entity()
export class AdminModo {

    @PrimaryGeneratedColumn()
    idAdminModo: string;



    @Column()
    roles: string;

    @OneToMany(()=> Utilisateurs,(utilisateurs)=>utilisateurs.roleId)
    utilistateurs:Utilisateurs[];

}