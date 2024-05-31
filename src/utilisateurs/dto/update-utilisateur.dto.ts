import {IsEmail, IsStrongPassword, IsString, IsOptional, IsNumber} from "class-validator";

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

    @IsString()
    @IsOptional()
    bio:string

    @IsNumber()
    @IsOptional()
    idAvatar: number
    @IsString()
    @IsOptional()
    supportPref:string

}
