import {Column, PrimaryGeneratedColumn} from "typeorm";


export class ParametreUtilisateur {

    @PrimaryGeneratedColumn()
    idParametre: number;

    @Column()
    nomParam:string

    @Column()
    valeurParam:string

    //TODO
    // FK ID UTILISATEUR


}
