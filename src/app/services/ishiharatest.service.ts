//tslint:disable

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class IshiharatestService{
  url = 'http://localhost:1337';
 // url = 'http://192.168.100.13:1337'

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }
  getAll(){
    return this._httpClient.get(this.url + '/testIshihara');
  }

  getOne(idtestIshihara:number){
    return this._httpClient.get(this.url + '/testIshihara/' + idtestIshihara)
  }

  create(testIshihara){
    return this._httpClient.post(this.url + '/testIshihara', testIshihara)
  }

  edit(testIshihara, idtestIshihara){
    return this._httpClient.put(this.url + '/testIshihara/'+idtestIshihara, testIshihara)
  }


}
