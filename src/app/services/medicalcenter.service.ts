// tslint:disable
// doctor.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "./auth.service";
@Injectable()
export class MedicalcenterService {
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
      return this._httpClient.get(this.url + '/MedicalCenter');
    }else{
      if(this._authService.esAdmin == true){
        return this._httpClient.get(this.url + '/MedicalCenter?id='+this._authService.idMedicalCenter);
      }else{
        if(this._authService.esPersonal == true){
          return this._httpClient.get(this.url + '/MedicalCenter?id='+this._authService.idUsuario);
        }
      }
    }

    // return this._httpClient.get(this.url + '/MedicalCenter');
  }

  getAllLookingFor(buscar){
  if(this._authService.esSuperAdmin == true){
    return this._httpClient.get(this.url + '/MedicalCenter?where={"or" : [ {"name":{"contains": "'+ buscar +'"}}, {"email":{"contains": "'+ buscar +'"}} ,{"phone":{"contains": "'+ buscar +'"}} , {"cel":{"contains": "'+ buscar +'"}} ,{"contact":{"contains": "'+ buscar +'"}} ,{"address":{"contains": "'+ buscar +'"}}       ] }'
      );

    }else{
      if(this._authService.esAdmin == true){
        return this._httpClient.get(this.url + '/MedicalCenter?where={"id":'+this._authService.idMedicalCenter+',"or" : [ {"name":{"contains": "'+ buscar +'"}}, {"email":{"contains": "'+ buscar +'"}} ,{"phone":{"contains": "'+ buscar +'"}} , {"cel":{"contains": "'+ buscar +'"}} ,{"contact":{"contains": "'+ buscar +'"}} ,{"address":{"contains": "'+ buscar +'"}}       ] }'
        );
      }else{
        if(this._authService.esPersonal == true){
          return this._httpClient.get(this.url + '/MedicalCenter?where={"id":'+this._authService.idMedicalCenter+',"or" : [ {"name":{"contains": "'+ buscar +'"}}, {"email":{"contains": "'+ buscar +'"}} ,{"phone":{"contains": "'+ buscar +'"}} , {"cel":{"contains": "'+ buscar +'"}} ,{"contact":{"contains": "'+ buscar +'"}} ,{"address":{"contains": "'+ buscar +'"}}       ] }'
          );
        }
      }
    }

  }

  getOne(idMedicalCenter:number){
    return this._httpClient.get(this.url + '/MedicalCenter/'+idMedicalCenter);
  }


  create(medicalCenter){
    return this._httpClient.post(this.url + '/MedicalCenter', medicalCenter)
  }

  edit(medicalCenter, medicalCenterId){
    return this._httpClient.put(this.url + '/MedicalCenter/'+medicalCenterId, medicalCenter)
  }


}
