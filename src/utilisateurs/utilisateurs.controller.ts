import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  NotFoundException,
  Patch,
  Delete,
  UseInterceptors,
  Session,
  UseGuards,
} from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import {AuthService} from "./auth.service";
import {UtilisateurCourant} from "../decorators/decorator";
import {Utilisateurs} from "./entities/utilisateur.entity";
import {LoginUtilisateurDto} from "./dto/login-utilisateur.dto";

@Controller('utilisateurs')
export class UtilisateursController {
  constructor(
      private _utilisateurService: UtilisateursService,
      private _authService: AuthService

  ) {}



  @Post('/register')
  async register(@Body() body:CreateUtilisateurDto,@Session()session:any) {
    const {email, mdpHash, pseudo, prenom} = body;
    const utilisateur= await this._authService.register({email, mdpHash, pseudo, prenom})
    session.userId=utilisateur.id;
    return utilisateur;
  }

  @Get('/profil/:id')
  async profil(@UtilisateurCourant()body : Utilisateurs, @Param('id') id: string):Promise <Partial<Utilisateurs>> {
    const {pseudo,bio,supportPref,idAvatar}= body;
    const utilisateurs= await this._utilisateurService.profil({pseudo,bio,supportPref,idAvatar},id)


    return utilisateurs;

  }


  @Post('/login')
  async login(@Body() body:LoginUtilisateurDto,@Session()session:any) {
    const {email, mdpHash }= body;
    const utilisateur= await this._authService.login({email, mdpHash})
    session.userId=utilisateur.id;

    return utilisateur;
  }
   @Patch('/:id')
   update(@Param('id') id: string, @Body() body: UpdateUtilisateurDto) {
    console.log(typeof body.idAvatar)
     return this._utilisateurService.update(id,body);
   }
    @Delete('/:id')
   remove(@Param('id') id: string) {
      return this._utilisateurService.remove(id);
    }
}
