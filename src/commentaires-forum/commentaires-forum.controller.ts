import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentairesForumService } from './commentaires-forum.service';
import { CreateCommentairesForumDto } from './dto/create-commentaires-forum.dto';
import { UpdateCommentairesForumDto } from './dto/update-commentaires-forum.dto';

@Controller('commentaires-forum')
export class CommentairesForumController {
  constructor(private readonly commentairesForumService: CommentairesForumService) {}

  @Post()
  create(@Body() createCommentairesForumDto: CreateCommentairesForumDto) {
    return this.commentairesForumService.create(createCommentairesForumDto);
  }

  @Get()
  findAll() {
    return this.commentairesForumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentairesForumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentairesForumDto: UpdateCommentairesForumDto) {
    return this.commentairesForumService.update(+id, updateCommentairesForumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentairesForumService.remove(+id);
  }
}
