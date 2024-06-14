import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Actualites} from "./actualites/entities/actualite.entity";
import { AdminModoModule } from './admin-modo/admin-modo.module';
import { ActualitesModule } from './actualites/actualites.module';
import { AmisModule } from './amis/amis.module';
import { AvatarsModule } from './avatars/avatars.module';
import { CategorieFfModule } from './categorie-ff/categorie-ff.module';
import { CommentaireActualitesModule } from './commentaire-actualites/commentaire-actualites.module';
import { CommentairesForumModule } from './commentaires-forum/commentaires-forum.module';
import { EvenementsModule } from './evenements/evenements.module';
import { FolowsUtilisateursModule } from './folows-utilisateurs/folows-utilisateurs.module';
import { LikesActualitesModule } from './likes-actualites/likes-actualites.module';
import { MessagePrivesModule } from './message-prives/message-prives.module';
import { NotificationsUtilisateursModule } from './notifications-utilisateurs/notifications-utilisateurs.module';
import { ParametreUtilisateursModule } from './parametre-utilisateurs/parametre-utilisateurs.module';
import { PublicationForumsModule } from './publication-forums/publication-forums.module';
import { ReactionsModule } from './reactions/reactions.module';
import { ReglesModule } from './regles/regles.module';
import { SignalementModule } from './signalement/signalement.module';
import { StatistiqueModule } from './statistique/statistique.module';
import {AdminModo} from "./admin-modo/entities/admin-modo.entity";
import {Amis} from "./amis/entities/ami.entity";
import {Avatar} from "./avatars/entities/avatar.entity";
import {CategorieFf} from "./categorie-ff/entities/categorie-ff.entity";
import {CommentaireActualite} from "./commentaire-actualites/entities/commentaire-actualite.entity";
import {CommentairesForum} from "./commentaires-forum/entities/commentaires-forum.entity";
import {Evenement} from "./evenements/entities/evenement.entity";
import {FolowsUtilisateur} from "./folows-utilisateurs/entities/folows-utilisateur.entity";
import {LikesActualite} from "./likes-actualites/entities/likes-actualite.entity";
import {MessagePrive} from "./message-prives/entities/message-prive.entity";
import {NotificationsUtilisateur} from "./notifications-utilisateurs/entities/notifications-utilisateur.entity";
import {ParametreUtilisateur} from "./parametre-utilisateurs/entities/parametre-utilisateur.entity";
import {PublicationForum} from "./publication-forums/entities/publication-forum.entity";
import {Reaction} from "./reactions/entities/reaction.entity";
import {Regle} from "./regles/entities/regle.entity";
import {Signalement} from "./signalement/entities/signalement.entity";
import {Statistique} from "./statistique/entities/statistique.entity";
import {Utilisateurs} from "./utilisateurs/entities/utilisateur.entity";
import {ConfigModule} from "@nestjs/config";
import {UtilisateursModule} from "./utilisateurs/utilisateurs.module";


@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
          logging:true,
        type:"mssql",
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT,10) ,
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          options: {
            trustServerCertificate: true,
          },
        entities:[Actualites,
            AdminModo,
             //Amis,
             Avatar,
             CategorieFf,
             CommentaireActualite,
             CommentairesForum,
             Evenement,
             FolowsUtilisateur,
             LikesActualite,
             MessagePrive,
             NotificationsUtilisateur,
             ParametreUtilisateur,
             PublicationForum,
             Reaction,
             Regle,
             Signalement,
             Statistique,
             Utilisateurs
        ],
        synchronize: true
      }),
      AdminModoModule,
      ActualitesModule,
      AmisModule,
      AvatarsModule,
      CategorieFfModule,
      CommentaireActualitesModule,
      CommentairesForumModule,
      EvenementsModule,
      FolowsUtilisateursModule,
      LikesActualitesModule,
      MessagePrivesModule,
      NotificationsUtilisateursModule,
      ParametreUtilisateursModule,
      PublicationForumsModule,
      ReactionsModule,
      ReglesModule,
      SignalementModule,
      StatistiqueModule,
      UtilisateursModule


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
