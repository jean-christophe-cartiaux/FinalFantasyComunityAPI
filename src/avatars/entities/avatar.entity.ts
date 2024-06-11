import {Column, PrimaryGeneratedColumn} from "typeorm";


export class Avatar {

    @PrimaryGeneratedColumn()
    idAvatar:number

    @Column()
    nomAvatar:string

    @Column()
    chemainImg:string



}
