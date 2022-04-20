//tslint:disable
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import {AuthService} from "../../services/auth.service";
import {MedicalcenterService} from "../../services/medicalcenter.service";

@Component({
  selector: 'app-patient-new-route',
  templateUrl: './patient-new-route.component.html',
  styleUrls: ['./patient-new-route.component.css']
})
export class PatientNewRouteComponent implements OnInit {

  constructor(
    public readonly _authService:AuthService,
    private readonly _patientService : PatientService,
    private readonly _medicalCenterService : MedicalcenterService,
    private readonly _router : Router,
  ) { }

  ngOnInit(): void {
    this.traerTodosMedicalCenter();
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  arrayOfMedicalCenters=[];
  arrayOfObservables = [];
  identification: string
  name: string
  gender: string
  phone: string
  email: string
  address: string
  occupation: string
  date_of_birth: string
  status : boolean
  medicalCenter: number
  patient;


  traerTodosMedicalCenter(){
    const observableTraerTodos = this._medicalCenterService.getAll();
    const susccripcion = observableTraerTodos
      .subscribe(
        (data)=>{
          this.arrayOfMedicalCenters = data as any[];
          console.log('CENTROS MEDICOS');
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      );
    this.arrayOfObservables.push(susccripcion);
  }

  createPatient(){
    var medicalCenter;
    if(this._authService.esSuperAdmin == true){
      medicalCenter = this.medicalCenter;
    }else{
      medicalCenter = this._authService.idMedicalCenter;
    }
    this.patient={
      "identification": this.identification,
      "name": this.name,
      "gender": this.gender,
      "phone": this.phone,
      "email": this.email,
      "address": this.address,
      "occupation": this.occupation,
      "date_of_birth": this.date_of_birth,
      "status" : true,
      "medicalCenter": medicalCenter
      // medicalCenter: this.medicalCenter
    };
     console.log(this.patient)

    if( this.date_of_birth == "" || this.date_of_birth == null){
      alert('La fecha no cumple el formato establecido')
    }else{
      try {
        this._patientService.create(
          this.patient
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            const url = ['/patient'];
            this._router.navigate(url);
          }
        );
      }catch (e){
        console.log('Error', e);
      }
    }


  }

}
