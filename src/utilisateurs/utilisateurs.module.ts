import {forwardRef, Module} from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { UtilisateursController } from './utilisateurs.controller';
import { AuthService } from './auth.service';
import {APP_INTERCEPTOR} from "@nestjs/core";
import {UtilisateurInterceptor} from "../Interceptors/utilisateur-interceptor";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Utilisateurs} from "./entities/utilisateur.entity";
import {AdminModo} from "../admin-modo/entities/admin-modo.entity";
import {AdminModoModule} from "../admin-modo/admin-modo.module";
import {AdminModoService} from "../admin-modo/admin-modo.service";

@Module({
    imports:[TypeOrmModule.forFeature([Utilisateurs,AdminModo]),
        forwardRef(()=>AdminModoModule)],
  controllers: [UtilisateursController],
  providers: [
      UtilisateursService,
      AuthService,
    {
      provide:APP_INTERCEPTOR,
      useClass:UtilisateurInterceptor
    }

  ],
})
export class UtilisateursModule {}
