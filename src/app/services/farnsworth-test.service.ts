// tslint:disable

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class FarnsworthTestService{
  url = 'http://localhost:1337';
 // url = 'http://192.168.100.13:1337'
  constructor(
    private readonly _httpClient: HttpClient
  ) {}

  getAll(){
    return this._httpClient.get(this.url + '/testfarnsworthmunsell');
  }
  getOne(testfarnsworthmunsellId:number){
    return this._httpClient.get(this.url + '/testfarnsworthmunsell/' + testfarnsworthmunsellId)
  }

  deleteOne(testfarnsworthmunsellId:number){
    return this._httpClient.delete(
      this.url + '/testfarnsworthmunsell' + testfarnsworthmunsellId   //URL
    )
  }

  create(testfarnsworthmunsell){
    return this._httpClient.post(this.url + '/testfarnsworthmunsell', testfarnsworthmunsell)
  }

  edit(testfarnsworthmunsell, testfarnsworthmunsellId){
    return this._httpClient.put(this.url + '/Doctor/'+testfarnsworthmunsellId, testfarnsworthmunsell)
  }

}
