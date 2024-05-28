import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActualitesService } from './actualites.service';
import { CreateActualiteDto } from './dto/create-actualite.dto';
import { UpdateActualiteDto } from './dto/update-actualite.dto';

@Controller('actualites')
export class ActualitesController {
  constructor(private readonly actualitesService: ActualitesService) {}

  @Post()
  create(@Body() createActualiteDto: CreateActualiteDto) {
    return this.actualitesService.create(createActualiteDto);
  }

  @Get()
  findAll() {
    return this.actualitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actualitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActualiteDto: UpdateActualiteDto) {
    return this.actualitesService.update(+id, updateActualiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actualitesService.remove(+id);
  }
}
