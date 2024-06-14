
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {PublicationForum} from "../../publication-forums/entities/publication-forum.entity";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";

@Entity()
export class CommentairesForum {
    @PrimaryGeneratedColumn()
    idCommentaire: number;

    @Column()
    contenu:string

    @Column({type:'timestamp',default:()=> 'CURRENT_TIMESTAMP'})
    dateCommentaire:Date;

    //TODO
    // FK ID Publication + ID Auteur

    @ManyToOne(()=>PublicationForum,publication=>publication.commentaires)
    @JoinColumn({name:"idPublication"})
    publication:PublicationForum;

    @ManyToOne(()=>Utilisateurs,utilisateur=>utilisateur.commentaires)
    @JoinColumn({name:"idAuteur"})
    auteur:Utilisateurs;


}
