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

  // @Get('/profil')
  // profil(@UserCourant)

  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.utilisateursService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUtilisateurDto: UpdateUtilisateurDto) {
  //   return this.utilisateursService.update(+id, updateUtilisateurDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.utilisateursService.remove(+id);
  // }
}
