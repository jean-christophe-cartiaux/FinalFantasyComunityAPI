import {CallHandler,ExecutionContext,Injectable,NestInterceptor} from "@nestjs/common";
import{UtilisateursService} from "../utilisateurs.service";


@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
    constructor(private _utilisateurService: UtilisateursService) {}

    async intercept(context:ExecutionContext,handler:CallHandler) {
        const request = context.switchToHttp().getRequest();
        const { userId } = request.session || {};

        if (userId) {
            const utilisateur = await this._utilisateurService.findOne(userId);
            request.currentUser = utilisateur;
        }
        return handler.handle();
    }
}