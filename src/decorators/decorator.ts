import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const UtilisateurCourant = createParamDecorator(
    (data:never, context:ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        return request.currentUser;
    }
)