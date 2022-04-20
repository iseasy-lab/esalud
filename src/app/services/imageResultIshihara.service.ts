//tslint:disable

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ImageResultIshiharaService{

  url = 'http://localhost:1337';
 // url = 'http://192.168.100.13:1337'

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }
  getAll(){
    return this._httpClient.get(this.url + '/imageResultIshihara');
  }

  getOne(idImageResultIshihara:number){
    return this._httpClient.get(this.url + '/imageResultIshihara/' + idImageResultIshihara)
  }

  create(imageResultIshihara){
    return this._httpClient.post(this.url + '/imageResultIshihara', imageResultIshihara)
  }

  edit(imageResultIshihara, idImageResultIshihara){
    return this._httpClient.put(this.url + '/imageResultIshihara/'+idImageResultIshihara, imageResultIshihara)
  }



}
