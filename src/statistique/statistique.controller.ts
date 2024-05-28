import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatistiqueService } from './statistique.service';
import { CreateStatistiqueDto } from './dto/create-statistique.dto';
import { UpdateStatistiqueDto } from './dto/update-statistique.dto';

@Controller('statistique')
export class StatistiqueController {
  constructor(private readonly statistiqueService: StatistiqueService) {}

  @Post()
  create(@Body() createStatistiqueDto: CreateStatistiqueDto) {
    return this.statistiqueService.create(createStatistiqueDto);
  }

  @Get()
  findAll() {
    return this.statistiqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statistiqueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatistiqueDto: UpdateStatistiqueDto) {
    return this.statistiqueService.update(+id, updateStatistiqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statistiqueService.remove(+id);
  }
}
