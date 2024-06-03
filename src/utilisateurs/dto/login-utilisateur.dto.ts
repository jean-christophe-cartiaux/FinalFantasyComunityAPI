import {IsString, IsEmail, IsStrongPassword, IsOptional, MinLength, MaxLength} from "class-validator";


export class LoginUtilisateurDto {

    @IsEmail()
    email:string

    @IsString()
    mdpHash:string


}