import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FolowsUtilisateursService } from './folows-utilisateurs.service';
import { CreateFolowsUtilisateurDto } from './dto/create-folows-utilisateur.dto';
import { UpdateFolowsUtilisateurDto } from './dto/update-folows-utilisateur.dto';

@Controller('folows-utilisateurs')
export class FolowsUtilisateursController {
  constructor(private readonly folowsUtilisateursService: FolowsUtilisateursService) {}

  @Post()
  create(@Body() createFolowsUtilisateurDto: CreateFolowsUtilisateurDto) {
    return this.folowsUtilisateursService.create(createFolowsUtilisateurDto);
  }

  @Get()
  findAll() {
    return this.folowsUtilisateursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.folowsUtilisateursService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFolowsUtilisateurDto: UpdateFolowsUtilisateurDto) {
    return this.folowsUtilisateursService.update(+id, updateFolowsUtilisateurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.folowsUtilisateursService.remove(+id);
  }
}
