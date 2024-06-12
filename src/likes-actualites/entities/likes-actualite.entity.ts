import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";
import {Actualites} from "../../actualites/entities/actualite.entity";


@Entity()
export class LikesActualite {
    @PrimaryGeneratedColumn()
    idLike:number

    //TODO
    // FK ID ACTU / ID UTILISATEUR
    @ManyToOne(()=>Utilisateurs)
    @JoinColumn({name:'UtilisateurId'})
    utilisateur:Utilisateurs;

    @ManyToOne(() => Actualites)
    @JoinColumn({ name: "actualiteId" })
    actualite: Actualites;
}
