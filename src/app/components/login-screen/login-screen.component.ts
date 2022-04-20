//tslint:disable
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import * as crypto from 'crypto-js';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  emailModelo:string;
  passwordModelo:string;
  mostrarMensaje=false;

  constructor(
    public readonly _authService:AuthService,
    private readonly _router : Router,
  ) { }

  /*
       const url = ['/medicalCenter']
            this._router.navigate(url);
  */

  ngOnInit(): void {
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  revisarLogin(){
     // const obsLogin = this._authService.login(this.emailModelo, this.passwordModelo);
    const obsLogin = this._authService.login(this.emailModelo, crypto.SHA512(this.passwordModelo).toString());



    obsLogin
      .subscribe(
        (arregloUsuarios:any[])=>{
          if(arregloUsuarios.length > 0 && arregloUsuarios[0]['medicalCenter']['status'] == true && arregloUsuarios[0]['status']==true){
            // console.log(arregloUsuarios);
            // console.log(arregloUsuarios[0]['medicalCenter']);
            this._authService.idMedicalCenter = arregloUsuarios[0]['medicalCenter']['id'];
            console.log(this._authService.idMedicalCenter);
            this._authService.estaAutenticado = true;
            this._authService.idUsuario = arregloUsuarios[0]['id'];
            this._authService.userName = arregloUsuarios[0]['name'];
            if(arregloUsuarios[0]['rol'] == 'Personal'){
              this._authService.roles=['Personal'];
              this._authService.esSuperAdmin = false;
              this._authService.esAdmin = false;
              this._authService.esPersonal = true;
            }else{
              if(arregloUsuarios[0]['rol'] == 'Administrador'){
                this._authService.roles=['Administrador', 'Personal'];
                this._authService.esSuperAdmin = false;
                this._authService.esAdmin = true;
                this._authService.esPersonal = true;
              }else{
                if(arregloUsuarios[0]['rol'] == 'SuperAdministrador'){
                  this._authService.roles=['SuperAdministrador', 'Administrador', 'Personal']
                  this._authService.esSuperAdmin = true;
                  this._authService.esAdmin = true;
                  this._authService.esPersonal = true;
                }
              }
            }
            // console.log('ROLEEESS');
            // console.log(this._authService.roles);
            const url = ['/home']
            this._router.navigate(url);
          }else{
            this._authService.estaAutenticado = false;
            this.mostrarMensaje = true;

          }
        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }

}
