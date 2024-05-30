import {Expose} from "class-transformer";

export class UtilisateurDto{
    @Expose()
    pseudo:string;
    @Expose()
    email:string;
}