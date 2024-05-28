import { Module } from '@nestjs/common';
import { ParametreUtilisateursService } from './parametre-utilisateurs.service';
import { ParametreUtilisateursController } from './parametre-utilisateurs.controller';

@Module({
  controllers: [ParametreUtilisateursController],
  providers: [ParametreUtilisateursService],
})
export class ParametreUtilisateursModule {}
