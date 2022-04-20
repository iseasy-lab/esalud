//tslint:disable
import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question3-route',
  templateUrl: './question3-route.component.html',
  styleUrls: ['./question3-route.component.css']
})
export class Question3RouteComponent implements OnInit {

  user;
  question3:string;
  answer3:string;
  answer3User:string;
  mensajeMostrar=false;

  constructor(
    public readonly _doctorService:DoctorService,
    private readonly _router : Router,
  ) { }


  ngOnInit(): void {
    const obsPerfil = this._doctorService.getOne(this._doctorService.idUserResetPassword);
    obsPerfil
      .subscribe(
        (user:any)=>{
          this.answer3 = user.answer3;
          this.question3 = user.question3;
        },
        (error)=>{
          console.error('Error', error)
        }
      )
  }


  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }


  continuar(){

    if(this.answer3User=='' || this.answer3User==null){
      this.mensajeMostrar=true;
    }else{
      this.mensajeMostrar=false;
      this._doctorService.answer3User = this.answer3User;
      this.navigateTo('/reset-password/reset')
    }
  }

}
