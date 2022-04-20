// tslint:disable
// doctor.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "./auth.service";
@Injectable()
export class ConsultationService {
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
      return this._httpClient.get(this.url + '/consultation?sort=date%20desc&sort=time%20asc&where={  "status": {"!=":"Pendiente"}}');
    }else{
      if(this._authService.esAdmin == true){
        return this._httpClient.get(this.url + '/consultation?sort=date%20desc&sort=time%20asc&idMedicalCenter='+this._authService.idMedicalCenter + '&deleted=false&where={  "status": {"!=":"Pendiente"}}');
      }else{
        if(this._authService.esPersonal == true){
          return this._httpClient.get(this.url + '/consultation?sort=date%20desc&sort=time%20asc&doctor='+this._authService.idUsuario+ '&deleted=false&where={  "status": {"!=":"Pendiente"}}');
        }
      }
    }

  }
  // getAll(){
  //   if(this._authService.esSuperAdmin == true){
  //     return this._httpClient.get(this.url + '/consultation?sort=date%20desc&sort=time%20asc');
  //   }else{
  //     if(this._authService.esAdmin == true){
  //       return this._httpClient.get(this.url + '/consultation?sort=date%20desc&sort=time%20asc&idMedicalCenter='+this._authService.idMedicalCenter + '&deleted=false');
  //     }else{
  //       if(this._authService.esPersonal == true){
  //         return this._httpClient.get(this.url + '/consultation?sort=date%20desc&sort=time%20asc&doctor='+this._authService.idUsuario+ '&deleted=false');
  //       }
  //     }
  //   }
  //
  // }


  getAllRecordatorio(){
    if(this._authService.esSuperAdmin == true){
      return this._httpClient.get(this.url + '/consultation?sort=date%20desc&sort=time%20asc&status=Pendiente');
    }else{
      if(this._authService.esAdmin == true){
        return this._httpClient.get(this.url + '/consultation?sort=date%20desc&sort=time%20asc&idMedicalCenter='+this._authService.idMedicalCenter + '&deleted=false&status=Pendiente');
      }else{
        if(this._authService.esPersonal == true){
          return this._httpClient.get(this.url + '/consultation?sort=date%20desc&sort=time%20asc&doctor='+this._authService.idUsuario+ '&deleted=false&status=Pendiente');
        }
      }
    }

  }

  getOne(consultationId){
    return this._httpClient.get(this.url + '/consultation/' + consultationId);
  }

  create(consultation){
    return this._httpClient.post(this.url + '/consultation', consultation)
  }

  edit(consultation, consultationId){
    return this._httpClient.put(this.url + '/consultation/'+consultationId, consultation)
  }

  getAllLookingFor(buscar){
    if(this._authService.esSuperAdmin == true){
      return this._httpClient.get(this.url + '/consultation?where={"or" : [ {"date":{"contains": "'+ buscar +'"}}, {"time":{"contains": "'+ buscar +'"}}, {"status":{"contains": "'+ buscar +'"}}, {"detail":{"contains": "'+ buscar +'"}} ] }'
      );
    }else{
      if(this._authService.esAdmin == true || this._authService.esPersonal == true){
        return this._httpClient.get(this.url + '/consultation?where={"idMedicalCenter": "'+ this._authService.idMedicalCenter +'","status": {"!=":"Eliminada"},"or" : [ {"date":{"contains": "'+ buscar +'"}}, {"time":{"contains": "'+ buscar +'"}}, {"detail":{"contains": "'+ buscar +'"}} ] }'
        );
      }
    }
  }

  getAllLookingForRecordatorio(buscar){
    if(this._authService.esSuperAdmin == true){
      return this._httpClient.get(this.url + '/consultation?where={"status": "Pendiente","or" : [ {"date":{"contains": "'+ buscar +'"}}, {"time":{"contains": "'+ buscar +'"}}, {"detail":{"contains": "'+ buscar +'"}} ] }'
      );
    }else{
      if(this._authService.esAdmin == true || this._authService.esPersonal == true){
        return this._httpClient.get(this.url + '/consultation?where={"idMedicalCenter": "'+ this._authService.idMedicalCenter +'","status": "Pendiente","or" : [ {"date":{"contains": "'+ buscar +'"}}, {"time":{"contains": "'+ buscar +'"}}, {"detail":{"contains": "'+ buscar +'"}} ] }'
        );
      }
    }
  }

}
