import {Column, PrimaryGeneratedColumn} from "typeorm";


export class MessagePrive {
    @PrimaryGeneratedColumn()
    idMessage:number

    @Column({type:"text"})
    contenueMp:string

    @Column({type: 'timestamp',default:()=> 'CURRENT_TIMESTAMP'})
    datMp:Date;

    //TODO
    // FK EXPEDITEUR  /  DESTINATAIRE

}
