import { Module } from '@nestjs/common';
import { FolowsUtilisateursService } from './folows-utilisateurs.service';
import { FolowsUtilisateursController } from './folows-utilisateurs.controller';

@Module({
  controllers: [FolowsUtilisateursController],
  providers: [FolowsUtilisateursService],
})
export class FolowsUtilisateursModule {}
