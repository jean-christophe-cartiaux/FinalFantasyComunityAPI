import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Actualites} from "../../actualites/entities/actualite.entity";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";

@Entity()

export class CommentaireActualite {

    @PrimaryGeneratedColumn()
    idCommentraire: number;

    @Column()
    contenu:string

    @Column({type:'timestamp' })
    dateCommentaire:Date;

    @ManyToOne(()=>Actualites,actualite =>actualite.commentaires)
    @JoinColumn({name:'idActualite'})
    actualite:Actualites;

    @Column()
    idActualite: string;

    @ManyToOne(()=>Utilisateurs)
    @JoinColumn({name:'idUtilisateur'})
    utilisateur:Utilisateurs;

    @Column()
    idUtilisateur: string;




}
