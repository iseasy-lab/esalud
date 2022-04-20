//tslint:disable
import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Router} from "@angular/router";
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-reset-route',
  templateUrl: './reset-route.component.html',
  styleUrls: ['./reset-route.component.css']
})
export class ResetRouteComponent implements OnInit {

  user;
  userEditado;
  question1:string;
  answer1:string;
  question2:string;
  answer2:string;
  question3:string;
  answer3:string;
  answer3User:string;
  mensajeMostrar=false;
  mensaje2Mostrar=false;
  pantallaMostrar=false;
  password:string;
  passwordConfirmacion:string;


  constructor(
    public readonly _doctorService:DoctorService,
    private readonly _router : Router,
  ) { }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }


  ngOnInit(): void {
    const obsPerfil = this._doctorService.getOne(this._doctorService.idUserResetPassword);
    obsPerfil
      .subscribe(
        (user:any)=>{
          console.log(user)
          this.answer1 = user.answer1;
          // console.log('1 '+user.answer1)
          // console.log('2 '+this.answer1)
          this.question1 = user.question1;
          this.answer2 = user.answer2;
          this.question2 = user.question2;
          this.answer3 = user.answer3;
          this.question3 = user.question3;

          if (this.answer1.toUpperCase() === this._doctorService.answer1User.toUpperCase()){
            if (this.answer2.toUpperCase() === this._doctorService.answer2User.toUpperCase()){
              if (this.answer3.toUpperCase() === this._doctorService.answer3User.toUpperCase()){
                this.pantallaMostrar=true;
              } else {
                this.pantallaMostrar=false;
                alert("Una o más respuestas no coinciden con las registradas por el usuario. Contacte a su administrador del sistema.")
                this.navigateTo('login')
              }
            } else {
              this.pantallaMostrar=false;
              alert("Una o más respuestas no coinciden con las registradas por el usuario. Contacte a su administrador del sistema.")
              this.navigateTo('login')
            }
          } else {
            this.pantallaMostrar=false;
            alert("Una o más respuestas no coinciden con las registradas por el usuario. Contacte a su administrador del sistema.")
            this.navigateTo('login')
          }

        },
        (error)=>{
          console.error('Error', error)
        }
      )



  }

  updatePassword() {

    // if(this.password=='' || this.password==null){
    //   this.mensajeMostrar=true;
    // }else{

      // if(this.passwordConfirmacion=='' || this.passwordConfirmacion==null){
      //   this.mensajeMostrar=true;
      // }else {
      //   this.mensajeMostrar=false;
      //   // if(this.password.length < 8 ){
      //   if(this.password.length < 8 ||
      //     !this.password.includes('a'||'b'||'c'||'d'||'e'||'f'||'g'||'h'||'i'||'j'||'k'||'l'||'m'||'n'||'o'||
      //       'p'||'q'||'r'||'s'||'t'||'u'||'v'||'w'||'x'||'y'||'z'||'ñ') ||
      //     !this.password.includes('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'I'||'J'||'K'||'L'||'M'||'N'||'O'||
      //       'P'||'Q'||'R'||'S'||'T'||'U'||'V'||'W'||'X'||'Y'||'Z'||'Ñ') ||
      //     !this.password.includes('0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9')
      //   ){
      //     this.mensaje2Mostrar=true;
      //   }else{
      //     this.mensaje2Mostrar=false;
      //

          if (this.password == this.passwordConfirmacion) {
            this.userEditado = {
              "password":  crypto.SHA512(this.password).toString(),
            }
            console.log(this.userEditado)
            try {
              this._doctorService.edit(
                this.userEditado, this._doctorService.idUserResetPassword
              ).subscribe(
                res => {
                  console.log('Respuesta del servidor', res);
                  alert('Contraseña actualizada correctamente.')
                  this.navigateTo('login')
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
        // }


      }
    // }

  // }



}
