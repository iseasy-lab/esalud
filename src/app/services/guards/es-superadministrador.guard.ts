//tslint:disable
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";


@Injectable()
export class EsSuperadministradorGuard implements CanActivate{

  constructor(
    private readonly _authService:AuthService
  ) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |
    UrlTree {
    //LOGICA BOOLEAN
    const esSuperAdministrador = this._authService.roles
      .some(
        (rol)=>{
          return rol === 'SuperAdministrador'
        }
      )
    return esSuperAdministrador;
  }

}
