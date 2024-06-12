import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Utilisateurs} from "../../utilisateurs/entities/utilisateur.entity";

@Entity()
export class ParametreUtilisateur {

    @PrimaryGeneratedColumn()
    idParametre: number;

    @Column()
    nomParam:string

    @Column()
    valeurParam:string

    //TODO
    // FK ID UTILISATEUR
    @ManyToOne(() => Utilisateurs)
    @JoinColumn({ name: "utilisateurId" })
    utilisateur: Utilisateurs;

}
