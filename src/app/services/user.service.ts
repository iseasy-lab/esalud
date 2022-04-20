// tslint:disable
// doctor.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "./auth.service";
@Injectable()
export class UserService {
  url = 'http://localhost:1337';
 // url = 'http://192.168.100.13:1337'
  // Constructores en angular sirven para

  // Inyección de Dependencias
  constructor(
    public readonly _authService:AuthService,
    private readonly _httpClient: HttpClient
  ) {
  }
  getAll(){
    if(this._authService.esSuperAdmin == true){
      return this._httpClient.get(this.url + '/doctor'+'?status=true');
    }else{
      if(this._authService.esAdmin == true){
        return this._httpClient.get(this.url + '/doctor?medicalCenter='+this._authService.idMedicalCenter);
      }else{
        if(this._authService.esPersonal == true){
          return this._httpClient.get(this.url + '/doctor?id='+this._authService.idUsuario);
        }
      }
    }
    // return this._httpClient.get(this.url + '/doctor');
  }

  getAllForUser(){
    if(this._authService.esSuperAdmin == true){
      return this._httpClient.get(this.url + '/doctor');
    }else{
      if(this._authService.esAdmin == true){
        return this._httpClient.get(this.url + '/doctor?medicalCenter='+this._authService.idMedicalCenter);
      }else{
        if(this._authService.esPersonal == true){
          return this._httpClient.get(this.url + '/doctor?id='+this._authService.idUsuario);
        }
      }
    }
    // return this._httpClient.get(this.url + '/doctor');
  }

}
