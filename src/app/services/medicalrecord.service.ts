// tslint:disable
// doctor.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class MedicalrecordService {
  url = 'http://localhost:1337';
 // url = 'http://192.168.100.13:1337'

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }
  getAll(){
    return this._httpClient.get(this.url + '/medicalRecord');
  }

  getOne(idMedicalRecord:number){
    return this._httpClient.get(this.url + '/medicalRecord/' + idMedicalRecord)
  }

  // http://localhost:1337/medicalRecord?patient=1&sort=createdAt%20desc
  getAllFromOnePatient(patientId:number){
    return this._httpClient.get(this.url + '/medicalRecord?patient=' + patientId + '&sort=createdAt%20desc')
  }

  create(medicalRecord){
    return this._httpClient.post(this.url + '/medicalRecord', medicalRecord)
  }

  edit(medicalRecord, medicalRecordId){
    return this._httpClient.put(this.url + '/medicalRecord/'+medicalRecordId, medicalRecord)
  }


}
