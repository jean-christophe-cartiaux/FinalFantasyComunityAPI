import { Module } from '@nestjs/common';
import { StatistiqueService } from './statistique.service';
import { StatistiqueController } from './statistique.controller';

@Module({
  controllers: [StatistiqueController],
  providers: [StatistiqueService],
})
export class StatistiqueModule {}
