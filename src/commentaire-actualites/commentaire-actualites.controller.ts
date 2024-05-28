import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentaireActualitesService } from './commentaire-actualites.service';
import { CreateCommentaireActualiteDto } from './dto/create-commentaire-actualite.dto';
import { UpdateCommentaireActualiteDto } from './dto/update-commentaire-actualite.dto';

@Controller('commentaire-actualites')
export class CommentaireActualitesController {
  constructor(private readonly commentaireActualitesService: CommentaireActualitesService) {}

  @Post()
  create(@Body() createCommentaireActualiteDto: CreateCommentaireActualiteDto) {
    return this.commentaireActualitesService.create(createCommentaireActualiteDto);
  }

  @Get()
  findAll() {
    return this.commentaireActualitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentaireActualitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentaireActualiteDto: UpdateCommentaireActualiteDto) {
    return this.commentaireActualitesService.update(+id, updateCommentaireActualiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentaireActualitesService.remove(+id);
  }
}
