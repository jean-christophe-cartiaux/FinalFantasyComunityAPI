import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";

@Entity()
export class MessagePrive {
    @PrimaryGeneratedColumn()
    idMessage:number

    @Column({type:"text"})
    contenueMp:string

    @Column({type: 'timestamp'})
    datMp:Date;

    //TODO
    // FK EXPEDITEUR  /  DESTINATAIRE
    @ManyToOne(()=>Utilisateurs)
    @JoinColumn({name:'expediteurId'})
    expediteur:Utilisateurs;

    @ManyToOne(()=>Utilisateurs)
    @JoinColumn({name:'destinataireId'})
    destinataire:Utilisateurs;

}
