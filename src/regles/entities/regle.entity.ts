import {Column, PrimaryGeneratedColumn} from "typeorm";

export class Regle {
    @PrimaryGeneratedColumn()
    idRegle:number

    @Column()
    titreRegle:string;

    @Column()
    cescriptionRegle:string;


}
