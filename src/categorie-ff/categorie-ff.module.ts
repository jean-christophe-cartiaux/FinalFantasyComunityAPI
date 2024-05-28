import { Module } from '@nestjs/common';
import { CategorieFfService } from './categorie-ff.service';
import { CategorieFfController } from './categorie-ff.controller';

@Module({
  controllers: [CategorieFfController],
  providers: [CategorieFfService],
})
export class CategorieFfModule {}
