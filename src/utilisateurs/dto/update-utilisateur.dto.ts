import {IsEmail,IsStrongPassword,IsString,IsOptional} from "class-validator";

export class UpdateUtilisateurDto  {

    @IsString()
    @IsOptional()
    pseudo:string

    @IsString()
    @IsOptional()
    prenom:string

    @IsEmail()
    @IsOptional()
    email:string

    @IsStrongPassword()
    @IsOptional()

    mdpHash:string


}
