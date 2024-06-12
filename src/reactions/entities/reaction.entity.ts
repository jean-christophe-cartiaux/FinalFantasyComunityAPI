import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";
import {PublicationForum} from "../../publication-forums/entities/publication-forum.entity";
import {Actualites} from "../../actualites/entities/actualite.entity";

@Entity()
export class Reaction {

    @PrimaryGeneratedColumn()
    idReaction:number;

    @Column()
    emoji:string

    @Column({type:"timestamp",default:()=> 'CURRENT_TIMESTAMP'})
    dateReaction:Date


    //TODO FK ID UTILISATEUR  / ID PUBLICATION

    @ManyToOne(()=>Utilisateurs)
    @JoinColumn({name:"idUtilisateur"})
    utilisateur:Utilisateurs;

    @ManyToOne(()=>PublicationForum)
    @JoinColumn({name:"idPublication"})
    publication:PublicationForum;

    @ManyToOne(()=>Actualites)
    @JoinColumn({name:"idActu"})
    actualite:Actualites;


}
