//tslint:disable
import { Component, OnInit } from '@angular/core';
import {MedicalrecordService} from "../../services/medicalrecord.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medical-record-new-route',
  templateUrl: './medical-record-new-route.component.html',
  styleUrls: ['./medical-record-new-route.component.css']
})
export class MedicalRecordNewRouteComponent implements OnInit {

  constructor(
    private readonly _medicalRecordService : MedicalrecordService,
    private readonly _router : Router
  ) { }

  ngOnInit(): void {
  }

  crearMedicalRecord(medicalRecord){
    const observableCrear = this._medicalRecordService.create(medicalRecord);
    observableCrear.subscribe(
      (Object)=>{
        // cambiar para ir a los tests
        const url = ['/medicalRecord/patient/'+medicalRecord.patient]
        this._router.navigate(url);
      },
      (error)=>{
        console.error('Error',error);
      }
    );
  }

}
