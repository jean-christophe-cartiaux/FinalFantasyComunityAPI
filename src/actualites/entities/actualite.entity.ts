import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne} from "typeorm";
import{Exclude} from "class-transformer";
import {IsOptional} from "class-validator";
import {CategorieFf} from "../../categorie-ff/entities/categorie-ff.entity";
import {CommentaireActualite} from "../../commentaire-actualites/entities/commentaire-actualite.entity";

@Entity()
export class Actualites {

    @PrimaryGeneratedColumn('uuid')
    idActu:string

    @Column()
    titre:string

    @Column()
    contenu:string

    @Column({type:'timestamp'})
    datePublication:Date;

    @ManyToOne(()=>CategorieFf,categorie=>categorie.actualites)
    @JoinColumn({name:"idCategorie"})

    categorie:CategorieFf;

    @Column()
    idCategorie:number;


    @OneToMany(() => CommentaireActualite, commentaire => commentaire.actualite)
    commentaires: CommentaireActualite[];
}
