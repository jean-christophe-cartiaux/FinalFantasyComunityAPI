import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";


@Entity()
export class FolowsUtilisateur {
    @PrimaryGeneratedColumn()
    idConnexion:number

    @Column()
    statut:string

    //TODO
    // FK ID UTILISATEUR 1 ET 2
    @ManyToOne(()=>Utilisateurs)
    @JoinColumn({name:"utilisateurId1"})
    utilisateur1:Utilisateurs;

    @ManyToOne(()=>Utilisateurs)
    @JoinColumn({name:"utilisateurId2"})
    utilisateur2:Utilisateurs;

}
