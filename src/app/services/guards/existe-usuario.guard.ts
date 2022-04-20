//tslint:disable
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";
import {DoctorService} from "../doctor.service";


@Injectable()
export class ExisteUsuarioGuard implements CanActivate{


  constructor(
    private readonly _doctorService:DoctorService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean |
    UrlTree> | boolean |
    UrlTree {
    if(this._doctorService.existeUsuario){
      return true;
    }else{
      return false;
    }
  }

}
