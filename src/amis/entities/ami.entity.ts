import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, ManyToMany} from "typeorm";
import{Exclude} from "class-transformer";
import {IsOptional} from "class-validator";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";

@Entity()


export class Amis {

    @PrimaryGeneratedColumn('uuid')



    @Column()
    statut:string

    @Column({type:'timestamp',default:()=> 'CURRENT_TIMESTAMP'})
    dateAjout:Date;


    //TODO
    // ajout  2 FK
    // ID UTILISATEUR LES DEUX !

    @ManyToOne(()=>Utilisateurs,utilisateur=>utilisateur.amisEnvoyes)
    @JoinColumn({name:'utilisateurId'})
    utilisateur:Utilisateurs;

    @ManyToOne(()=>Utilisateurs,utilisateur=>utilisateur.amisRecus)
    @JoinColumn({name:"amiId"})
    ami:Utilisateurs;

    @Column()
    utilisateurId:string;
    @Column()
    amiId:string;



}
