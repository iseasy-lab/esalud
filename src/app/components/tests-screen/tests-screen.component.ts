//tslint:disable
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MedicalrecordService} from "../../services/medicalrecord.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-tests-screen',
  templateUrl: './tests-screen.component.html',
  styleUrls: ['./tests-screen.component.css']
})
export class TestsScreenComponent implements OnInit {

  idMedicalRecord;
  medicalRecord;
  arrayOfObservable=[];


  constructor(
    public readonly _authService:AuthService,
    private readonly _activatedRoute : ActivatedRoute,
    private readonly _medicalRecordService : MedicalrecordService,
    private readonly _router : Router,
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros : Params)=>{
        this.idMedicalRecord = Number(parametros.id);
      }
    )
    this.traerMedicalRecord(this.idMedicalRecord);
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  traerMedicalRecord(id){
    const observabeTraerUna = this._medicalRecordService.getOne(id);
    const suscripcion = observabeTraerUna.subscribe(
      (data)=>{
        this.medicalRecord = data as any[];
        console.log(data);
        console.log('this.medicalRecord');
        console.log(this.medicalRecord.patient.id);
      },
      (error)=>{
        console.error(error);
      }
    );
    this.arrayOfObservable.push(suscripcion);
  }

}

