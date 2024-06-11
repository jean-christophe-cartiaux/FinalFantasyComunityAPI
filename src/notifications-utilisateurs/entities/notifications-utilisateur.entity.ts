import {Column, PrimaryGeneratedColumn} from "typeorm";


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
}
