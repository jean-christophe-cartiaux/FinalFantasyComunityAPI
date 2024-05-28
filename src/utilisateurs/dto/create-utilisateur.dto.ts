
import{IsString ,IsEmail,IsStrongPassword} from "class-validator";


export class CreateUtilisateurDto {

    @IsString()
    pseudo:string

    @IsEmail()
    email:string

    @IsStrongPassword()
    mdpHash:string
}
