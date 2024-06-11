import {forwardRef, Module} from '@nestjs/common';
import { AdminModoService } from './admin-modo.service';
import { AdminModoController } from './admin-modo.controller';
import {AdminGuard} from "../utilisateurs/guards/admin.guard";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Utilisateurs} from "../utilisateurs/entities/utilisateur.entity";
import {AdminModo} from "./entities/admin-modo.entity";
import {UtilisateursModule} from "../utilisateurs/utilisateurs.module";

@Module({
  imports:[TypeOrmModule.forFeature([Utilisateurs,AdminModo]), forwardRef(() => UtilisateursModule),],
  controllers: [AdminModoController],
  providers: [AdminModoService,AdminGuard],
  exports: [AdminModoService]
})
export class AdminModoModule {}
