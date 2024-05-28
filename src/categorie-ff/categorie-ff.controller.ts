import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategorieFfService } from './categorie-ff.service';
import { CreateCategorieFfDto } from './dto/create-categorie-ff.dto';
import { UpdateCategorieFfDto } from './dto/update-categorie-ff.dto';

@Controller('categorie-ff')
export class CategorieFfController {
  constructor(private readonly categorieFfService: CategorieFfService) {}

  @Post()
  create(@Body() createCategorieFfDto: CreateCategorieFfDto) {
    return this.categorieFfService.create(createCategorieFfDto);
  }

  @Get()
  findAll() {
    return this.categorieFfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categorieFfService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategorieFfDto: UpdateCategorieFfDto) {
    return this.categorieFfService.update(+id, updateCategorieFfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categorieFfService.remove(+id);
  }
}
