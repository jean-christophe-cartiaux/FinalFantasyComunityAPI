import { PartialType } from '@nestjs/mapped-types';
import { CreateRegleDto } from './create-regle.dto';
import {Expose} from "class-transformer";
import {IsEmail, IsOptional, IsString, IsStrongPassword} from "class-validator";

export class UpdateRegleDto extends PartialType(CreateRegleDto) {

    @IsString()
    @IsOptional()
    pseudo:string;

    @IsOptional()
    @IsEmail()
    email:string;
    @IsString()
    @IsOptional()
    prenom:string
    @IsStrongPassword()
    @IsOptional()
    mdpHash:string
}
