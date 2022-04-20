//tslint:disable
import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-patients-screen',
  templateUrl: './patients-screen.component.html',
  styleUrls: ['./patients-screen.component.css']
})
export class PatientsScreenComponent implements OnInit {

  arrayOfPatient = [];
  arrayOfPatientBackUp = [];
  arrayOfObservables = [];
  buscar

  constructor(
    public readonly _authService:AuthService,
    readonly _patientService : PatientService,
    private readonly _router : Router,
  ) { }

  ngOnInit(): void {
    this.traerTodosPatients();
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  traerTodosPatients(){
   const observableTaerTodos = this._patientService.getAll();
   const suscripcion = observableTaerTodos
     .subscribe(
       (data)=>{
         this.arrayOfPatient = data as any[];
         this.arrayOfPatientBackUp = data as any[];
         console.log(data);
       },
      (error)=>{
         console.log(error);
      }
     );
   this.arrayOfObservables.push(suscripcion);
  }

  deletePatient(idPatientEliminar, name){
    if(confirm("¿Seguro que desea eliminar a: " + name +'?')) {
      var patientEliminar={
        "status" : false
      }
      try {
        this._patientService.edit(
          patientEliminar, idPatientEliminar
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            this.arrayOfPatient = [];
            this.traerTodosPatients()

            const url = ['/patient'];
            this._router.navigate(url);
          }
        );
      }catch (e){
        console.log('Error', e);
      }
    }
  }


  printear(){
    if(this.buscar !="" && this.buscar != undefined && this.buscar != null){
      console.log(this.buscar)
      const observableBuscarTodos = this._patientService.getAllLookingFor(this.buscar);
      const susccripcion = observableBuscarTodos
        .subscribe(
          (data)=>{
            this.arrayOfPatient = data as any[];
            console.log(data);
          },
          (error)=>{
            console.log(error);
          }
        );
      this.arrayOfObservables.push(susccripcion);
    } else{
      this.arrayOfPatient = this.arrayOfPatientBackUp;
    }

  }


}
