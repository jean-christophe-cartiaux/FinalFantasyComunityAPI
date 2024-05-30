import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import{Exclude} from "class-transformer";
import {IsOptional} from "class-validator";


@Entity()
export class Utilisateurs {

    @PrimaryGeneratedColumn("uuid")
    id: string;


    @Column({nullable:true})
    @Exclude()
    @IsOptional()
    prenom:string;


    @Column({nullable:true})
    @Exclude()
    @IsOptional()
    nom:string;


    @Column()
    @Exclude()
    pseudo:string;

    @Column()
    email:string;

    @Column()
    mdpHash:string;

    @Column({nullable:true})
    @Exclude()
    @IsOptional()
    bio:string;

    @Column({nullable:true})
    @Exclude()
    @IsOptional()
    supportPref:string;

    @Column({nullable:true})
    @IsOptional()
    idAvatar:number;


}
