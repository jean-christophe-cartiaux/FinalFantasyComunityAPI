import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne} from "typeorm";
import{Exclude} from "class-transformer";
import {IsOptional} from "class-validator";
import {AdminModo} from "../../admin-modo/entities/admin-modo.entity";
import {ForeignKeyMetadata} from "typeorm/metadata/ForeignKeyMetadata";
import {Amis} from "../../amis/entities/ami.entity";
import {PublicationForum} from "../../publication-forums/entities/publication-forum.entity";
import {CommentairesForum} from "../../commentaires-forum/entities/commentaires-forum.entity";


@Entity()
export class Utilisateurs {

    @PrimaryGeneratedColumn("uuid")
    id: string;


    @Column({nullable:true})
    @IsOptional()
    @Exclude()
    prenom:string;


    @Column({nullable:true})
    @Exclude()
    @IsOptional()
    nom:string;


    @Column()

    pseudo:string;

    @Column()
    @Exclude()
    email:string;

    @Column()
    @Exclude()
    mdpHash:string;

    @Column({nullable:true})

    @IsOptional()
    bio:string;

    @Column({nullable:true})

    @IsOptional()
    supportPref:string;

    @Column({nullable:true})
    @IsOptional()
    idAvatar:number;

    @ManyToOne(()=>AdminModo,(adminModo)=>adminModo.utilistateurs,)
    @JoinColumn({name:'roleId'})
    role:AdminModo;
    @Column({nullable:true})
    roleId: string;



    @OneToMany(()=>Amis,amis=>amis.utilisateur)
    amisEnvoyes:Amis[];

    @OneToMany(()=>Amis,amis =>amis.ami)
    amisRecus:Amis[];

    @OneToMany(() => PublicationForum, publication => publication.utilisateur)
    publications: PublicationForum[];

    @OneToMany(() => CommentairesForum, commentaire => commentaire.auteur)
    commentaires: CommentairesForum[];
}
