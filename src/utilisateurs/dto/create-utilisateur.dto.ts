
import {IsString, IsEmail, IsStrongPassword, IsOptional, MinLength, MaxLength} from "class-validator";


export class CreateUtilisateurDto {

    @IsString()
    pseudo:string

    @IsString()
    @IsOptional()
    prenom: string;

    @IsEmail()
    email:string

    @IsString()
    mdpHash:string
}
