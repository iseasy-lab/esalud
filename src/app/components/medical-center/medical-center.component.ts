// tslint:disable

import { Component, OnInit } from '@angular/core';
import {MedicalcenterService} from "../../services/medicalcenter.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-medical-center',
  templateUrl: './medical-center.component.html',
  styleUrls: ['./medical-center.component.css']
})
export class MedicalCenterComponent implements OnInit {

  arrayOfMedicalCenters = [];
  arrayOfMedicalCentersRespaldo = [];
  arrayOfObservables = [];
  buscar

  constructor(
    public readonly _authService:AuthService,
    private readonly _medicalcenterService : MedicalcenterService,
    private readonly _router : Router,
  ) { }

  ngOnInit(): void {
    this.traerTodosMedicalCenter();
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  traerTodosMedicalCenter(){
    const observableTraerTodos = this._medicalcenterService.getAll();
    const susccripcion = observableTraerTodos
      .subscribe(
        (data)=>{
          this.arrayOfMedicalCenters = data as any[];
          this.arrayOfMedicalCentersRespaldo = data as any[];
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      );
    this.arrayOfObservables.push(susccripcion);
  }

  inhabilitarMedicalCenter(idMedicalCenter, name){
    if(confirm("¿Seguro que desea inhabilitar a: " + name +'?')) {
      var medicalCenterInhabilitar={
        "status" : false
      }
      try {
        this._medicalcenterService.edit(
          medicalCenterInhabilitar, idMedicalCenter
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            this.arrayOfMedicalCenters = [];
            this.traerTodosMedicalCenter()

            const url = ['/medicalCenter'];
            this._router.navigate(url);
          }
        );
      }catch (e){
        console.log('Error', e);
      }
    }
  }

  habilitarMedicalCenter(idMedicalCenter, name){
    if(confirm("¿Seguro que desea inhabilitar a: " + name +'?')) {
      var medicalCenterInhabilitar={
        "status" : true
      }
      try {
        this._medicalcenterService.edit(
          medicalCenterInhabilitar, idMedicalCenter
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            this.arrayOfMedicalCenters = [];
            this.traerTodosMedicalCenter()

            const url = ['/medicalCenter'];
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
    const observableBuscarTodos = this._medicalcenterService.getAllLookingFor(this.buscar);
    const susccripcion = observableBuscarTodos
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
    } else{
      this.arrayOfMedicalCenters = this.arrayOfMedicalCentersRespaldo;
    }

  }


}
