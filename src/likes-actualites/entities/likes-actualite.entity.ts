import {PrimaryGeneratedColumn} from "typeorm";

export class LikesActualite {
    @PrimaryGeneratedColumn()
    idLike:number

    //TODO
    // FK ID ACTU / ID UTILISATEUR
}
