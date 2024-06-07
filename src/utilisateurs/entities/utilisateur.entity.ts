import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from "typeorm";
import{Exclude} from "class-transformer";
import {IsOptional} from "class-validator";
import {AdminModo} from "../../admin-modo/entities/admin-modo.entity";


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

    @OneToOne(type => AdminModo, adminModo => adminModo.admin, { nullable: true })
    adminModo: AdminModo;

    @OneToMany(type => AdminModo, adminModo => adminModo.modo, { nullable: true })
    modos: AdminModo[];

    @OneToMany(type => AdminModo, adminModo => adminModo.warriorOfLight, { nullable: true })
    warriorsOfLight: AdminModo[];

}
