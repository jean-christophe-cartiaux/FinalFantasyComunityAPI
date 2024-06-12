import {Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";
import {PublicationForum} from "../../publication-forums/entities/publication-forum.entity";

export class Signalement {

    @PrimaryGeneratedColumn()
    idSignalement:number

    @Column({type:"text"})
    raisonSignalement:string
    @Column({type:"timestamp",default:()=> 'CURRENT_TIMESTAMP'})
    dateSignalement:Date;


    // TODO
    //  FK ID SIGNALEUR  / ID UTILISATEUR SIGNALER // ID PUBLICATION SIGNALER

    @ManyToOne(() => Utilisateurs)
    @JoinColumn({ name: "idSignaleur" })
    signaleur: Utilisateurs;

    @ManyToOne(() => Utilisateurs)
    @JoinColumn({ name: "idUtilisateurSignaler" })
    utilisateurSignale: Utilisateurs;

    @ManyToOne(() => PublicationForum)
    @JoinColumn({ name: "idPublicationSignaler" })
    publicationSignale: PublicationForum;
}
