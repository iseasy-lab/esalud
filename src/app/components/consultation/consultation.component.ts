//tslint:disable
import { Component, OnInit } from '@angular/core';
import {ConsultationService} from "../../services/consultation.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

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
    const observableTraerTodos = this._consultationService.getAll();
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
    if(confirm("¿Seguro que desea eliminar la consulta seleccionada?")) {
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

  printear(){
    if(this.buscar !="" && this.buscar != undefined && this.buscar != null){
      console.log(this.buscar)
      const observableBuscarTodos = this._consultationService.getAllLookingFor(this.buscar);
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
