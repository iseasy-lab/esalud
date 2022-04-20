//tslint:disable
import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {DoctorService} from "../../services/doctor.service";

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  arrayOfUsers = [];
  arrayOfUsersBackUp = [];
  arrayOfObservables = [];
  buscar

  constructor(
    public readonly _authService:AuthService,
    readonly _userService : UserService,
    private readonly _doctorService: DoctorService,
    private readonly _router : Router,
  ) { }

  ngOnInit(): void {
    this.traerTodosUsuarios();
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  traerTodosUsuarios(){
    const observableTraerTodos = this._userService.getAllForUser();
    const suscripcion = observableTraerTodos
      .subscribe(
        (data)=>{
          this.arrayOfUsers = data as any[];
          this.arrayOfUsersBackUp = data as any[];
          console.log(data);

        },
        (error)=>{
          console.log(error);
        }
      );
    this.arrayOfObservables.push(suscripcion);

  }

  deleteDoctor(idDoctorEliminar, name){
    if(confirm("¿Seguro que desea deshabilitar a: " + name +'?')) {
      var doctorEliminar={
        "status" : false
      }
      try {
        this._doctorService.edit(
          doctorEliminar, idDoctorEliminar
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            this.arrayOfUsers = [];
            this.traerTodosUsuarios()

            const url = ['/user'];
            this._router.navigate(url);
          }
        );
      }catch (e){
        console.log('Error', e);
      }
    }
  }

  habilitarDoctor(idDoctorEliminar, name){
    if(confirm("¿Seguro que desea habilitar a: " + name +'?')) {
      var doctorEliminar={
        "status" : true
      }
      try {
        this._doctorService.edit(
          doctorEliminar, idDoctorEliminar
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            this.arrayOfUsers = [];
            this.traerTodosUsuarios()

            const url = ['/user'];
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
            this.arrayOfUsers = data as any[];
            console.log(data);
          },
          (error)=>{
            console.log(error);
          }
        );
      this.arrayOfObservables.push(susccripcion);
    } else{
      this.arrayOfUsers = this.arrayOfUsersBackUp;
    }

  }


}
