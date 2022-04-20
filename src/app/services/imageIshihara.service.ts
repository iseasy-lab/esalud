// tslint:disable

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable()
export class ImageIshiharaService{
  url = 'http://localhost:1337';
 // url = 'http://192.168.100.13:1337'

  constructor(
    public readonly _authService:AuthService,
    private readonly _httpClient: HttpClient
  ) {
  }

  getAll(){
    if(this._authService.esSuperAdmin == true){
      // return this._httpClient.get(this.url + '/imageIshihara?status=true');
      return this._httpClient.get(this.url + '/imageIshihara');
    }else{
      if(this._authService.esAdmin == true){
        return this._httpClient.get(this.url + '/imageIshihara?idMedicalCenter='+this._authService.idMedicalCenter +"&status=true");
      }else{
        if(this._authService.esPersonal == true){
          return this._httpClient.get(this.url + '/imageIshihara?idMedicalCenter='+this._authService.idMedicalCenter +"&status=true");
        }
      }
    }

    // return this._httpClient.get(this.url + '/imageIshihara');
  }


  getAllTest(){
    if(this._authService.esSuperAdmin == true){
      // return this._httpClient.get(this.url + '/imageIshihara?status=true');
      return this._httpClient.get(this.url + '/imageIshihara?idMedicalCenter='+this._authService.idMedicalCenter +"&status=true");
    }else{
      if(this._authService.esAdmin == true){
        return this._httpClient.get(this.url + '/imageIshihara?idMedicalCenter='+this._authService.idMedicalCenter +"&status=true");
      }else{
        if(this._authService.esPersonal == true){
          return this._httpClient.get(this.url + '/imageIshihara?idMedicalCenter='+this._authService.idMedicalCenter +"&status=true");
        }
      }
    }

    // return this._httpClient.get(this.url + '/imageIshihara');
  }

  getOne(imageIshiharaId){
    return this._httpClient.get(this.url + '/imageIshihara/' +imageIshiharaId);
  }

  create(imageIshihara){
    return this._httpClient.post(this.url + '/imageIshihara/new', imageIshihara)
  }

  edit(imageIshihara, imageIshiharaId){
    return this._httpClient.put(this.url + '/imageIshihara/'+imageIshiharaId, imageIshihara)
  }

  getAllLookingFor(buscar){
    if(this._authService.esSuperAdmin == true){
      return this._httpClient.get(this.url + '/imageIshihara?where={"or" : [ {"reference_color":{"contains": "'+ buscar +'"}}, {"real_result":{"contains": "'+ buscar +'"}}, {"idMedicalCenter":{"contains": "'+ buscar +'"}}  ] }'
      );
    }else{
      if(this._authService.esAdmin == true){
        return this._httpClient.get(this.url + '/imageIshihara?where={"idMedicalCenter": "'+ this._authService.idMedicalCenter +'","or" : [ {"reference_color":{"contains": "'+ buscar +'"}}, {"real_result":{"contains": "'+ buscar +'"}}, {"idMedicalCenter":{"contains": "'+ buscar +'"}}  ] }'
        );
      }
    }

  }

}
