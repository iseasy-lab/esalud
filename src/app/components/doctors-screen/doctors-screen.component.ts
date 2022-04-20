// tslint:disable

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-doctors-screen',
  templateUrl: './doctors-screen.component.html',
  styleUrls: ['./doctors-screen.component.css']
})
export class DoctorsScreenComponent implements OnInit {

  arrayOfDoctores = [];
  arrayOfDoctoresBackUp = [];
  arrayOfObservables = [];
  buscar

  constructor(
    public readonly _authService:AuthService,
    private readonly _doctorService: DoctorService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.traerTodosDoctores();
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate([navigate]);
  }

  traerTodosDoctores(){
    const observableTraerTodos = this._doctorService.getAll();
    const suscripcion = observableTraerTodos
      .subscribe(
      (data)=>{
        this.arrayOfDoctores = data as any[];
        this.arrayOfDoctoresBackUp = data as any[];
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
    this.arrayOfObservables.push(suscripcion);
  }

  deleteDoctor(idDoctorEliminar, name){
    if(confirm("¿Seguro que desea eliminar a: " + name +'?')) {
      var doctorEliminar={
        "status" : false
      }
      try {
        this._doctorService.edit(
          doctorEliminar, idDoctorEliminar
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            this.arrayOfDoctores = [];
            this.traerTodosDoctores()

            const url = ['/doctor'];
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
      const observableBuscarTodos = this._doctorService.getAllLookingFor(this.buscar);
      const susccripcion = observableBuscarTodos
        .subscribe(
          (data)=>{
            this.arrayOfDoctores = data as any[];
            console.log(data);
          },
          (error)=>{
            console.log(error);
          }
        );
      this.arrayOfObservables.push(susccripcion);
    } else{
      this.arrayOfDoctores = this.arrayOfDoctoresBackUp;
    }

  }


}
