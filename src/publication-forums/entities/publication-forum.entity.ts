import {Column, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";
import {CommentairesForum} from "../../commentaires-forum/entities/commentaires-forum.entity";

export class PublicationForum {

    @PrimaryGeneratedColumn()
    idPubliationForum: number;

    @Column({type:"string"})
    contenu:string

    @Column({type:"timestamp",default:()=> 'CURRENT_TIMESTAMP'})
    datePost:Date


    //TODO
    // FK AUTEUR ID
    @ManyToOne(()=>Utilisateurs)
    @JoinTable({name:"idUtilisateur"})
    utilisateur:Utilisateurs;

    @OneToMany(()=>CommentairesForum,commentaire=>commentaire.publication)
    commentaires:CommentairesForum[];


}
