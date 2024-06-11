import {Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";


export class NotificationsUtilisateur {
    @PrimaryGeneratedColumn()
    idNotification:number

    @Column()
    contenu:string
    @Column({type:'timestamp',default:()=> 'CURRENT_TIMESTAMP'})
    dateNotif:Date
    @Column()
    etatsStatut:string


    //TODO
    // FK ID UTILISATEUR
    @ManyToOne(() => Utilisateurs)
    @JoinColumn({ name: "utilisateurId" })
    utilisateur: Utilisateurs;
}
