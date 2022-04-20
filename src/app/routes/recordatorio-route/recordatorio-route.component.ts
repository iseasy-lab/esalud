//tslint:disable
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ConsultationService} from "../../services/consultation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recordatorio-route',
  templateUrl: './recordatorio-route.component.html',
  styleUrls: ['./recordatorio-route.component.css']
})
export class RecordatorioRouteComponent implements OnInit {


  buscar;
  arrayOfConsultations = [];
  arrayOfConsultationsBackUp = [];
  arrayOfObservables = [];

  constructor(
    public readonly _authService:AuthService,
    private readonly _consultationService : ConsultationService,
    private readonly _router : Router,
  ) {}

  ngOnInit(): void {
    this.traerTodasConsultas();
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  traerTodasConsultas(){
    const observableTraerTodos = this._consultationService.getAllRecordatorio();
    const suscripcion = observableTraerTodos
      .subscribe(
        (data)=>{
          this.arrayOfConsultations = data as any[];
          this.arrayOfConsultationsBackUp = data as any[];
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      );
    this.arrayOfObservables.push(suscripcion);
  }

  deleteConsultation(idConsultationEliminar){
    if(confirm("¿Seguro que desea ELIMINAR la consulta seleccionada?")) {
      var consultationEliminar={
        "status" : "Eliminada",
        "deleted" : true
      }
      try {
        this._consultationService.edit(
          consultationEliminar, idConsultationEliminar
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            this.arrayOfConsultations = [];
            this.traerTodasConsultas()

            const url = ['/consultation'];
            this._router.navigate(url);
          }
        );
      }catch (e){
        console.log('Error', e);
      }
    }
  }

  FinalizarConsultation(idConsultationEliminar){
    if(confirm("¿Seguro que desea FINALIZAR la consulta seleccionada?")) {
      var consultationEliminar={
        "status" : "Finalizada",
        "deleted" : true
      }
      try {
        this._consultationService.edit(
          consultationEliminar, idConsultationEliminar
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            this.arrayOfConsultations = [];
            this.traerTodasConsultas()

            const url = ['/consultation'];
            this._router.navigate(url);
          }
        );
      }catch (e){
        console.log('Error', e);
      }
    }
  }

  CancelarConsultation(idConsultationEliminar){
    if(confirm("¿Seguro que desea CANCELAR la consulta seleccionada?")) {
      var consultationEliminar={
        "status" : "Cancelada",
        "deleted" : true
      }
      try {
        this._consultationService.edit(
          consultationEliminar, idConsultationEliminar
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            this.arrayOfConsultations = [];
            this.traerTodasConsultas()

            const url = ['/consultation'];
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
      const observableBuscarTodos = this._consultationService.getAllLookingForRecordatorio(this.buscar);
      const susccripcion = observableBuscarTodos
        .subscribe(
          (data)=>{
            this.arrayOfConsultations = data as any[];
            console.log(data);
          },
          (error)=>{
            console.log(error);
          }
        );
      this.arrayOfObservables.push(susccripcion);
    } else{
      this.arrayOfConsultations = this.arrayOfConsultationsBackUp;
    }

  }


}
