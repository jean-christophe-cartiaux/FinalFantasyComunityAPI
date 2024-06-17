import {IsNotEmpty, IsString} from "class-validator";

export class CreateAdminModoDto {
    @IsString()
    roles:string
}
