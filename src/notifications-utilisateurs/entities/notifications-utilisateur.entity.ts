import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";

@Entity()
export class NotificationsUtilisateur {
    @PrimaryGeneratedColumn()
    idNotification:number

    @Column()
    contenu:string
    @Column({type:'timestamp'})
    dateNotif:Date
    @Column()
    etatsStatut:string


    //TODO
    // FK ID UTILISATEUR
    @ManyToOne(() => Utilisateurs)
    @JoinColumn({ name: "utilisateurId" })
    utilisateur: Utilisateurs;
}
