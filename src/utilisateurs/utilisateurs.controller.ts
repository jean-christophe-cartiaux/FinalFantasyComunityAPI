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
import {UtilisateurCourant} from "./decorators/decorator";
import {Utilisateurs} from "./entities/utilisateur.entity";
import {LoginUtilisateurDto} from "./dto/login-utilisateur.dto";
import {AuthGuard} from "./guards/auth.guard";


export enum Role{
    Warrio_Of_Light='F9FD7024-715C-407F-8CA6-796B9A5AF8FF',
    Modo='7C2D0C1D-21A3-4C6F-B61F-6CCEA2EB1D0D',
    Admin='BF17E836-4B56-4B36-A449-0A68C7CECAFA'
}
@Controller('utilisateurs')
export class UtilisateursController {
  constructor(
      private _utilisateurService: UtilisateursService,
      private _authService: AuthService

  ) {}

    @Get('/myProfil')
    @UseGuards(AuthGuard)
    moi(@UtilisateurCourant() user: Utilisateurs) {
        console.log(user);
        return user;
    }

  @Post('/register')
  async register(@Body() body:CreateUtilisateurDto,@Session()session:any) {
    const {email, mdpHash, pseudo} = body;
    const utilisateur= await this._authService.register({email, mdpHash, pseudo})
    session.userId=utilisateur.id;
    return utilisateur;
  }

  @Get('/profil/:id')
  async profil(@UtilisateurCourant()body : Utilisateurs, @Param('id') id: string):Promise <Partial<Utilisateurs>> {
    const {pseudo,bio,supportPref,idAvatar}= body;
    const utilisateurs= await this._utilisateurService.profil({pseudo,bio,supportPref,idAvatar},id)


    return utilisateurs;

  }

  @Get('/:id')
  async getprofil( @Param('id') id: string):Promise <Partial<Utilisateurs>> {

      const utilisateurs = await this._utilisateurService.findOne(id)


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

     return this._utilisateurService.update(id,body.toEntity());
   }
    @Delete('/:id')
   remove(@Param('id') id: string) {
      return this._utilisateurService.remove(id);
    }

    @Patch('/role/:id')
    async assignRole(@Param('id') id: string,@Body('roleName') roleName: string  ) {


      return await this._utilisateurService.assignRole(id, Role[roleName]);
  }
}
