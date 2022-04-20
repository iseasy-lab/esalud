// tslint:disable
// doctor.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "./auth.service";
@Injectable()
export class DoctorService {
  url = 'http://localhost:1337';
 // url = 'http://192.168.100.13:1337'
  idUserResetPassword: number;
  existeUsuario=false;
  answer1User:string;
  answer2User:string;
  answer3User:string;


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
        return this._httpClient.get(this.url + '/doctor?medicalCenter='+this._authService.idMedicalCenter+'&status=true');
      }else{
        if(this._authService.esPersonal == true){
          return this._httpClient.get(this.url + '/doctor?id='+this._authService.idUsuario+'&status=true');
        }
      }
    }

    // return this._httpClient.get(this.url + '/Doctor');
  }

  getOne(idDoctor:number){
    return this._httpClient.get(this.url + '/Doctor/' + idDoctor)
  }

  deleteOne(idDoctor:number){
    return this._httpClient.delete(
      this.url + '/Doctor' + idDoctor   //URL
    )
  }

  create(doctor){
    return this._httpClient.post(this.url + '/Doctor', doctor)
  }

  edit(doctor, doctorId){
    return this._httpClient.put(this.url + '/Doctor/'+doctorId, doctor)
  }

  getAllLookingFor(buscar){
    if(this._authService.esSuperAdmin == true){
      return this._httpClient.get(this.url + '/doctor?where={"or" : [ {"identification":{"contains": "'+ buscar +'"}}, {"name":{"contains": "'+ buscar +'"}}, {"email":{"contains": "'+ buscar +'"}}, {"phone":{"contains": "'+ buscar +'"}}, {"position":{"contains": "'+ buscar +'"}}   ] }'
      // return this._httpClient.get(this.url + '/doctor?where={"status":"true","or" : [ {"identification":{"contains": "'+ buscar +'"}}, {"name":{"contains": "'+ buscar +'"}}, {"email":{"contains": "'+ buscar +'"}}, {"phone":{"contains": "'+ buscar +'"}}, {"position":{"contains": "'+ buscar +'"}}   ] }'
      );
   }else{
      if(this._authService.esAdmin == true){
         return this._httpClient.get(this.url + '/doctor?where={"medicalCenter": "'+ this._authService.idMedicalCenter +'","status":"true","or" : [ {"identification":{"contains": "'+ buscar +'"}}, {"name":{"contains": "'+ buscar +'"}}, {"email":{"contains": "'+ buscar +'"}}, {"phone":{"contains": "'+ buscar +'"}}, {"position":{"contains": "'+ buscar +'"}}   ] }'
         );
      }
    }
  }

  getOneReset(email:string , identificacion:string){
    return this._httpClient.get(this.url + '/doctor?where={"email":"'+email+'","identification":"'+identificacion+'"}');
  }


}
