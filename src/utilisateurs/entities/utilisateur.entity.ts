import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import{Exclude} from "class-transformer";
import {IsOptional} from "class-validator";


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


}
