// tslint:disable
// doctor.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "./auth.service";
@Injectable()
export class PatientService {
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
      return this._httpClient.get(this.url + '/Patient');
      // return this._httpClient.get(this.url + '/Patient'+'?status=true');
    }else{
      if(this._authService.esAdmin == true){
        return this._httpClient.get(this.url + '/Patient?medicalCenter='+this._authService.idMedicalCenter+'&status=true');
      }else{
        if(this._authService.esPersonal == true){
          return this._httpClient.get(this.url + '/Patient?medicalCenter='+this._authService.idMedicalCenter+'&status=true');
        }
      }
    }

    // return this._httpClient.get(this.url + '/Patient');
  }



  getOne(patientId){
    return this._httpClient.get(this.url + '/Patient/' +patientId);
  }

  create(patient){
    return this._httpClient.post(this.url + '/patient', patient)
  }

  edit(patient, patientId){
    return this._httpClient.put(this.url + '/patient/'+patientId, patient)
  }

  getAllLookingFor(buscar){
    if(this._authService.esSuperAdmin == true){
      return this._httpClient.get(this.url + '/Patient?where={"or" : [ {"name":{"contains": "'+ buscar +'"}}, {"identification":{"contains": "'+ buscar +'"}},  {"gender":{"contains": "'+ buscar +'"}}, {"phone":{"contains": "'+ buscar +'"}}, {"email":{"contains": "'+ buscar +'"}},{"address":{"contains": "'+ buscar +'"}},{"occupation":{"contains": "'+ buscar +'"}},{"date_of_birth":{"contains": "'+ buscar +'"}} ] }'
      );

    }else{
      if(this._authService.esAdmin == true || this._authService.esPersonal == true){
        return this._httpClient.get(this.url + '/Patient?where={"medicalCenter":"'+this._authService.idMedicalCenter+'","status":"true","or" : [ {"name":{"contains": "'+ buscar +'"}}, {"identification":{"contains": "'+ buscar +'"}},  {"gender":{"contains": "'+ buscar +'"}}, {"phone":{"contains": "'+ buscar +'"}}, {"email":{"contains": "'+ buscar +'"}},{"address":{"contains": "'+ buscar +'"}},{"occupation":{"contains": "'+ buscar +'"}},{"date_of_birth":{"contains": "'+ buscar +'"}} ] }'
        );
      }
    }

  }


}
