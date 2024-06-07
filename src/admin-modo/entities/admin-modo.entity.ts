import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Exclude } from "class-transformer";
import { IsOptional } from "class-validator";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";
 // Importez l'entité Utilisateurs

@Entity()
export class AdminModo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idUtilisateur: string;

    @Column()
    roles: string;


    @ManyToOne(() => Utilisateurs, user => user.adminModo)
    admin: Utilisateurs;

    @ManyToOne(() => Utilisateurs, user => user.modos)
    modo: Utilisateurs;

    @ManyToOne(() => Utilisateurs, user => user.warriorsOfLight)
    warriorOfLight: Utilisateurs;
}