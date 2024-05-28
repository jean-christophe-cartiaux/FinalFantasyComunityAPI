import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReglesService } from './regles.service';
import { CreateRegleDto } from './dto/create-regle.dto';
import { UpdateRegleDto } from './dto/update-regle.dto';

@Controller('regles')
export class ReglesController {
  constructor(private readonly reglesService: ReglesService) {}

  @Post()
  create(@Body() createRegleDto: CreateRegleDto) {
    return this.reglesService.create(createRegleDto);
  }

  @Get()
  findAll() {
    return this.reglesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reglesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegleDto: UpdateRegleDto) {
    return this.reglesService.update(+id, updateRegleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reglesService.remove(+id);
  }
}
