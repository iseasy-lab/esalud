//tslint:disable
import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question1-route',
  templateUrl: './question1-route.component.html',
  styleUrls: ['./question1-route.component.css']
})
export class Question1RouteComponent implements OnInit {

  user;
  question1:string;
  answer1:string;
  answer1User:string;
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
          this.answer1 = user.answer1;
          this.question1 = user.question1;
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

    if(this.answer1User=='' || this.answer1User==null){
      this.mensajeMostrar=true;
    }else{
      this.mensajeMostrar=false;
      this._doctorService.answer1User = this.answer1User;
      this.navigateTo('/reset-password/question2')
    }
  }


}
