import {Column, PrimaryGeneratedColumn} from "typeorm";

export class FolowsUtilisateur {
    @PrimaryGeneratedColumn()
    idConnexion:number

    @Column()
    statut:string

    //TODO
    // FK ID UTILISATEUR 1 ET 2
}
