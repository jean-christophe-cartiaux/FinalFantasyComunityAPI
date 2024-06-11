import {Column, PrimaryGeneratedColumn} from "typeorm";

export class Reaction {

    @PrimaryGeneratedColumn()
    idReaction:number;

    @Column()
    emoji:string

    @Column({type:"timestamp",default:()=> 'CURRENT_TIMESTAMP'})
    dateReaction:Date


    //TODO FK ID UTILISATEUR  / ID PUBLICATION
}
