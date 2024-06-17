import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Injectable} from "@nestjs/common";

@Entity()
export class Avatar {

    @PrimaryGeneratedColumn()
    idAvatar:number

    @Column()
    nomAvatar:string

    @Column()
    chemainImg:string



}
