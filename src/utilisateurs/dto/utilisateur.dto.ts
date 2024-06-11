import {Expose, Transform} from "class-transformer";

export class UtilisateurDto{
    @Expose()
    pseudo:string;
    @Expose()
    email:string;
    @Transform(({ obj }) => obj.adminModoService.id)
    @Expose()
    roleId: string;
}