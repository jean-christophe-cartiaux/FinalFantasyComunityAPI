import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Injectable} from "@nestjs/common";
@Entity()
export class Statistique {

    @PrimaryGeneratedColumn()
    idStatistique: number;

    @Column()
    nomDeLaStat:string

    @Column()
    valeurDeLaStat:number
}
