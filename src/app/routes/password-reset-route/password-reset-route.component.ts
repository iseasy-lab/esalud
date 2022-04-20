//tslint:disable
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DoctorService} from "../../services/doctor.service";

@Component({
  selector: 'app-password-reset-route',
  templateUrl: './password-reset-route.component.html',
  styleUrls: ['./password-reset-route.component.css']
})
export class PasswordResetRouteComponent implements OnInit {

  emailModelo:string;
  identificationModelo:string;
  mostrarMensaje=false;

  constructor(
    public readonly _doctorService:DoctorService,
    private readonly _router : Router,
  ) { }


  ngOnInit(): void {
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  revisarUsuario(){
    var mostrarEmail=this.emailModelo;
    var mostrarIdentification=this.identificationModelo;
    const obsLogin = this._doctorService.getOneReset(this.emailModelo, this.identificationModelo);
    obsLogin
      .subscribe(
        (arregloUsuarios:any[])=>{
          if(arregloUsuarios.length > 0 && arregloUsuarios[0]['medicalCenter']['status'] == true && arregloUsuarios[0]['status']==true){
            // console.log(arregloUsuarios);
            this.mostrarMensaje = false;
            // console.log(arregloUsuarios[0]['medicalCenter']);
            this._doctorService.idUserResetPassword = arregloUsuarios[0]['medicalCenter']['id'];
            //console.log(this._doctorService.idUserResetPassword)
            this._doctorService.existeUsuario=true;
            if(
              arregloUsuarios[0]['question1'] === 'Pendiente' ||
              arregloUsuarios[0]['question2'] === 'Pendiente' ||
              arregloUsuarios[0]['question3'] === 'Pendiente' ||
              arregloUsuarios[0]['answer1'] === '' ||
              arregloUsuarios[0]['answer2'] === '' ||
              arregloUsuarios[0]['answer3'] === '' ||
              arregloUsuarios[0]['answer1'] === null ||
              arregloUsuarios[0]['answer2'] === null ||
              arregloUsuarios[0]['answer3'] === null
            ){
              alert('Usted no ha registrado las preguntas de seguridad para recuperar su contraseña. ' +
                'Le recomendamos que contacte a su administrador del sistema.');
              this.navigateTo('/login')
            }else{
              // alert(arregloUsuarios[0]['question3'])
              this.navigateTo('/reset-password/question1')

            }


          }else{
            this.mostrarMensaje = true;
            console.log('No se encontró el usuario  con esa combinación de email e identificación.')
            // console.log('No se encontró el usuario  con email:'+mostrarEmail+' e identificación: '+mostrarIdentification)
          }

        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }
}
