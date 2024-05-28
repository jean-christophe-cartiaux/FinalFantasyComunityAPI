import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublicationForumsService } from './publication-forums.service';
import { CreatePublicationForumDto } from './dto/create-publication-forum.dto';
import { UpdatePublicationForumDto } from './dto/update-publication-forum.dto';

@Controller('publication-forums')
export class PublicationForumsController {
  constructor(private readonly publicationForumsService: PublicationForumsService) {}

  @Post()
  create(@Body() createPublicationForumDto: CreatePublicationForumDto) {
    return this.publicationForumsService.create(createPublicationForumDto);
  }

  @Get()
  findAll() {
    return this.publicationForumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicationForumsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublicationForumDto: UpdatePublicationForumDto) {
    return this.publicationForumsService.update(+id, updatePublicationForumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicationForumsService.remove(+id);
  }
}
