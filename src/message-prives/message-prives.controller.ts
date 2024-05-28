import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagePrivesService } from './message-prives.service';
import { CreateMessagePriveDto } from './dto/create-message-prive.dto';
import { UpdateMessagePriveDto } from './dto/update-message-prive.dto';

@Controller('message-prives')
export class MessagePrivesController {
  constructor(private readonly messagePrivesService: MessagePrivesService) {}

  @Post()
  create(@Body() createMessagePriveDto: CreateMessagePriveDto) {
    return this.messagePrivesService.create(createMessagePriveDto);
  }

  @Get()
  findAll() {
    return this.messagePrivesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagePrivesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessagePriveDto: UpdateMessagePriveDto) {
    return this.messagePrivesService.update(+id, updateMessagePriveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagePrivesService.remove(+id);
  }
}
