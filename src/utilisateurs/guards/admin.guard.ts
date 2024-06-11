import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import {Reflector} from "@nestjs/core";
import {AdminModoService} from "../../admin-modo/admin-modo.service";
import {AdminModo} from "../../admin-modo/entities/admin-modo.entity";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {
  }
  canActivate(
    context: ExecutionContext,
  ): boolean{

    const roles = this.reflector.get<string[]>('roles',context.getHandler());
    if(!roles){
    return true;
    }



    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return roles.some((role) => user.roles?.includes(role));

  }
}
