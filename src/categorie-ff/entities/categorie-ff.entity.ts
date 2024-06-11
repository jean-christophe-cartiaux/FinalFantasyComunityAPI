import {Column, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Actualites} from "../../actualites/entities/actualite.entity";


export class CategorieFf {

    @PrimaryGeneratedColumn()
    idCategorie:number;

    @Column()
    nom:string;

    @Column()
    description:string;

    //TODO
    // FK IDACTU !!!

    @OneToMany(()=>Actualites,actualite =>actualite.categorie)
    actualites:Actualites[];

}
