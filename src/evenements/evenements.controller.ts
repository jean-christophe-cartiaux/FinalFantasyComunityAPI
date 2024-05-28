import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvenementsService } from './evenements.service';
import { CreateEvenementDto } from './dto/create-evenement.dto';
import { UpdateEvenementDto } from './dto/update-evenement.dto';

@Controller('evenements')
export class EvenementsController {
  constructor(private readonly evenementsService: EvenementsService) {}

  @Post()
  create(@Body() createEvenementDto: CreateEvenementDto) {
    return this.evenementsService.create(createEvenementDto);
  }

  @Get()
  findAll() {
    return this.evenementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evenementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvenementDto: UpdateEvenementDto) {
    return this.evenementsService.update(+id, updateEvenementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evenementsService.remove(+id);
  }
}
