//tslint:disable

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService{
  estaAutenticado=false;
  url = 'http://localhost:1337';
 // url = 'http://192.168.100.13:1337'


  idMedicalCenter : number;
  // roles=['SuperAdministrador', 'Administrador', 'Personal'];
  // roles=['Administrador','Personal'];
  roles=[];
  esSuperAdmin = false;
  esAdmin = false;
  esPersonal = false;
  idUsuario : number;
  userName : string;


  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  login(email:string, password:string){
    return this._httpClient.get(this.url + '/doctor?email='+ email + '&password='+password )
  }

}

