import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Regle {
    @PrimaryGeneratedColumn()
    idRegle:number

    @Column()
    titreRegle:string;

    @Column()
    cescriptionRegle:string;


}
