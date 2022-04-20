//tslint:disable
import { Component, OnInit } from '@angular/core';
import {MedicalcenterService} from "../../services/medicalcenter.service";
import {DoctorService} from "../../services/doctor.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import * as crypto from 'crypto-js';


@Component({
  selector: 'app-doctor-create-route',
  templateUrl: './doctor-create-route.component.html',
  styleUrls: ['./doctor-create-route.component.css']
})
export class DoctorCreateRouteComponent implements OnInit {

  constructor(
    public readonly _authService:AuthService,
    private readonly _medicalCenterService : MedicalcenterService,
    private readonly _doctorService : DoctorService,
    private readonly _router:Router
  ) { }

  doctor;
  arrayOfMedicalCenters=[]
  arrayOfObservables = [];
  name: string
  identification: string
  phone: string
  position: string
  email: string
  password: string
  rol: string
  status : boolean
  medicalCenter: number

  passwordKey = 'thisIsMyPasswordKey';



  ngOnInit(): void {
    this.traerTodosMedicalCenter();
  }

  traerTodosMedicalCenter(){
    const observableTraerTodos = this._medicalCenterService.getAll();
    const susccripcion = observableTraerTodos
      .subscribe(
        (data)=>{
          this.arrayOfMedicalCenters = data as any[];
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      );
    this.arrayOfObservables.push(susccripcion);
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  createDoctor(){

    var medicalCenter;
    if(this._authService.esSuperAdmin == true){
      medicalCenter = this.medicalCenter;
    }else{
      medicalCenter = this._authService.idMedicalCenter;
    }
      this.doctor = {
        "name": this.name,
        "identification": this.identification,
        "phone": this.phone,
        "position": this.position,
        "email": this.email,
        // "password": this.password,
        "password": crypto.SHA512(this.password).toString(),
        "rol": this.rol,
        // "status" : this.status,
        "status" : true,
        "question1" : "Pendiente",
        "question2" : "Pendiente",
        "question3" : "Pendiente",
        "answer1" : "Pendiente",
        "answer2" : "Pendiente",
        "answer3" : "Pendiente",
        "medicalCenter": medicalCenter
      }

    try {
      this._doctorService.create(
        this.doctor
      ).subscribe(
        res => {
          console.log('Respuesta del servidor', res);
          const url = ['/doctor'];
          this._router.navigate(url);
        }
      );
    }catch (e){

      console.log('Error', e);

    }

  }

}
