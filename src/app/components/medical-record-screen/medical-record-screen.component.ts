// tslint:disable

import { Component, OnInit } from '@angular/core';
import {MedicalrecordService} from "../../services/medicalrecord.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-medical-record-screen',
  templateUrl: './medical-record-screen.component.html',
  styleUrls: ['./medical-record-screen.component.css']
})
export class MedicalRecordScreenComponent implements OnInit {

  arrayOfMedicalRecords = [];
  arrayOfObservables = [];
  patientId;
  patient;

  constructor(
    public readonly _authService:AuthService,
    private readonly _medicalRecordService : MedicalrecordService,
    private readonly _patientService : PatientService,
    private readonly _router:Router,
    private readonly _activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {

    const obsRuta2 = this._activatedRoute.params;
    obsRuta2.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        const obsPatient = this._patientService.getOne(id);
        obsPatient
          .subscribe(
            (patient:any)=>{
              this.patient = patient;
            },
            (error)=>{
              console.error('Error', error)
            }
          )
      }
    );


    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros:Params)=>{
        const id = Number(parametros.id);
        this.patientId = id;
        console.log(id);
        console.log(this.patientId);
        this.traerTodasHistoriasClinicasDelPaciente(id);
      }
    );
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  traerTodasHistoriasClinicasDelPaciente(id : number){
    const observableTraaerTodas = this._medicalRecordService.getAllFromOnePatient(id);
    const suscripcion = observableTraaerTodas.subscribe(
      (data)=>{
        this.arrayOfMedicalRecords = data as any[];
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
    this.arrayOfObservables.push(suscripcion);
  }

}
