//tslint:disable
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {DoctorService} from "../../services/doctor.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-user-edit-route',
  templateUrl: './user-edit-route.component.html',
  styleUrls: ['./user-edit-route.component.css']
})
export class UserEditRouteComponent implements OnInit {
  doctor;
  doctorEditado;
  name:string;
  email:string;
  phone:string;
  position:string;
  rol:string;
  identification:string;
  status:boolean;
  doctorId;


  constructor(
    public readonly _authService:AuthService,
    private readonly _doctorService:DoctorService,
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _router : Router,
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        this.doctorId = id;
        const obsDoctor = this._doctorService.getOne(id);
        obsDoctor
          .subscribe(
            (doctor:any)=>{
              this.doctor = doctor;
              this.name=doctor.name;
              this.email=doctor.email;
              this.identification=doctor.identification;
              this.phone=doctor.phone;
              this.position=doctor.position;
              this.rol=doctor.rol;
              this.status=doctor.status;

              // this.identification=doctor.identification;
            },
            (error)=>{
              console.error('Error', error)
            }
          )
      }
    )
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  editarUsuario() {
      this.doctorEditado = {
        "name": this.name,
        "email": this.email,
        "phone": this.phone,
        "position": this.position,
        "rol": this.rol,
        "identification": this.identification,
        "status": this.status,
      }
      console.log(this.doctorEditado)
      try {
        this._doctorService.edit(
          this.doctorEditado, this.doctorId
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            const url = ['/user/'];
            this._router.navigate(url);
          }
        );
      } catch (e) {
        console.log('Error', e);
      }

  }
  // const obsLogin = this._authService.login(this.emailModelo, crypto.SHA512(this.passwordModelo).toString());

  restartPassword(){
    this.doctorEditado = {
       "password": crypto.SHA512(this.identification + 'Cambiar').toString(),
    }
    try {
      this._doctorService.edit(
        this.doctorEditado, this.doctorId
      ).subscribe(
        res => {
          console.log('Respuesta del servidor', res);
          const url = ['/user'];
          // const url = ['/user/view/'+ this.doctor.id];
          this._router.navigate(url);
        }
      );
    } catch (e) {
      console.log('Error', e);
    }
  }

}
