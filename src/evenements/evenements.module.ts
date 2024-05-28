import { Module } from '@nestjs/common';
import { EvenementsService } from './evenements.service';
import { EvenementsController } from './evenements.controller';

@Module({
  controllers: [EvenementsController],
  providers: [EvenementsService],
})
export class EvenementsModule {}
