import { Module } from '@nestjs/common';
import { CommentaireActualitesService } from './commentaire-actualites.service';
import { CommentaireActualitesController } from './commentaire-actualites.controller';

@Module({
  controllers: [CommentaireActualitesController],
  providers: [CommentaireActualitesService],
})
export class CommentaireActualitesModule {}
