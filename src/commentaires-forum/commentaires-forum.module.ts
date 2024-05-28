import { Module } from '@nestjs/common';
import { CommentairesForumService } from './commentaires-forum.service';
import { CommentairesForumController } from './commentaires-forum.controller';

@Module({
  controllers: [CommentairesForumController],
  providers: [CommentairesForumService],
})
export class CommentairesForumModule {}
