import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";

@Entity()
export class Evenement {

    @PrimaryGeneratedColumn()
    idEvent:number

    @Column()
    nomEvent:string

    @Column()
    descriptionEvent:string

    @Column({type:'timestamp',default:()=> 'CURRENT_TIMESTAMP'})
    dateDebut:Date
    @Column({type:'timestamp',default:()=> 'CURRENT_TIMESTAMP'})
    dateFin:Date

    @Column()
    lieuxEvent:string

    //TODO
    // FK ID CREATEUR EVENT

    @ManyToOne(()=>Utilisateurs)
    @JoinColumn({name:"createurId"})
    createur:Utilisateurs
    


}
