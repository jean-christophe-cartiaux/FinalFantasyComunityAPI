import {Column, PrimaryGeneratedColumn} from "typeorm";

export class Signalement {

    @PrimaryGeneratedColumn()
    idSignalement:number

    @Column({type:"text"})
    raisonSignalement:string
    @Column({type:"timestamp",default:()=> 'CURRENT_TIMESTAMP'})
    dateSignalement:Date;


    // TODO
    //  FK ID SIGNALEUR  / ID UTILISATEUR SIGNALER // ID PUBLICATION SIGNALER
}
