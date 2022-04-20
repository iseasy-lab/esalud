//tslint:disable
import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Router} from "@angular/router";
import * as crypto from 'crypto-js';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-change-password-route',
  templateUrl: './change-password-route.component.html',
  styleUrls: ['./change-password-route.component.css']
})
export class ChangePasswordRouteComponent implements OnInit {


  user;
  userEditado;
  mensajeMostrar=false;
  mensaje2Mostrar=false;
  password:string;
  passwordConfirmacion:string;


  constructor(
    public readonly _doctorService:DoctorService,
    private readonly _router : Router,
    public readonly _authService:AuthService,
  ) { }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }


  ngOnInit(): void {
    const obsPerfil = this._doctorService.getOne(this._authService.idUsuario);
    obsPerfil
      .subscribe(
        (user:any)=>{
          this.user = user;
        },
        (error)=>{
          console.error('Error', error)
        }
      )

  }

  updatePassword() {

    if (this.password == this.passwordConfirmacion) {
      this.userEditado = {
        "password":  crypto.SHA512(this.password).toString(),
      }
      console.log('this.userEditado')
      console.log(this.userEditado)
      try {
        this._doctorService.edit(
          this.userEditado, this.user.id
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            alert('Contraseña actualizada correctamente.')
            this.navigateTo('profile')
            // const url = ['/login'];
            // this._router.navigate(url);
          }
        );
      } catch (e) {
        console.log('Error', e);
      }
    } else {
      alert("Las contraseñas no coinciden");
    }


  }




}
