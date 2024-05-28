import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParametreUtilisateursService } from './parametre-utilisateurs.service';
import { CreateParametreUtilisateurDto } from './dto/create-parametre-utilisateur.dto';
import { UpdateParametreUtilisateurDto } from './dto/update-parametre-utilisateur.dto';

@Controller('parametre-utilisateurs')
export class ParametreUtilisateursController {
  constructor(private readonly parametreUtilisateursService: ParametreUtilisateursService) {}

  @Post()
  create(@Body() createParametreUtilisateurDto: CreateParametreUtilisateurDto) {
    return this.parametreUtilisateursService.create(createParametreUtilisateurDto);
  }

  @Get()
  findAll() {
    return this.parametreUtilisateursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parametreUtilisateursService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParametreUtilisateurDto: UpdateParametreUtilisateurDto) {
    return this.parametreUtilisateursService.update(+id, updateParametreUtilisateurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parametreUtilisateursService.remove(+id);
  }
}
