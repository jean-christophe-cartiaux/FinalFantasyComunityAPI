import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikesActualitesService } from './likes-actualites.service';
import { CreateLikesActualiteDto } from './dto/create-likes-actualite.dto';
import { UpdateLikesActualiteDto } from './dto/update-likes-actualite.dto';

@Controller('likes-actualites')
export class LikesActualitesController {
  constructor(private readonly likesActualitesService: LikesActualitesService) {}

  @Post()
  create(@Body() createLikesActualiteDto: CreateLikesActualiteDto) {
    return this.likesActualitesService.create(createLikesActualiteDto);
  }

  @Get()
  findAll() {
    return this.likesActualitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likesActualitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikesActualiteDto: UpdateLikesActualiteDto) {
    return this.likesActualitesService.update(+id, updateLikesActualiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likesActualitesService.remove(+id);
  }
}
