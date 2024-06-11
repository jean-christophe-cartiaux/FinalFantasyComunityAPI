import {Column, PrimaryGeneratedColumn} from "typeorm";

export class Statistique {

    @PrimaryGeneratedColumn()
    idStatistique: number;

    @Column()
    nomDeLaStat:string

    @Column()
    valeurDeLaStat:number
}
