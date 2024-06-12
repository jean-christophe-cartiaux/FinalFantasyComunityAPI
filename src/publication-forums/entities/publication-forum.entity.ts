import {Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";
import {CommentairesForum} from "../../commentaires-forum/entities/commentaires-forum.entity";

@Entity()
export class PublicationForum {

    @PrimaryGeneratedColumn()
    idPubliationForum: number;

    @Column()
    contenu:string

    @Column({type:"timestamp",default:()=> 'CURRENT_TIMESTAMP'})
    datePost:Date


    //TODO
    // FK AUTEUR ID
    @ManyToOne(()=>Utilisateurs,utilisateur=>utilisateur.publicationsForum)
    utilisateur:Utilisateurs;

    @OneToMany(() => CommentairesForum,commentaire => commentaire.publication)
    commentaires:CommentairesForum[];



}
