import { Module } from '@nestjs/common';
import { LikesActualitesService } from './likes-actualites.service';
import { LikesActualitesController } from './likes-actualites.controller';

@Module({
  controllers: [LikesActualitesController],
  providers: [LikesActualitesService],
})
export class LikesActualitesModule {}
