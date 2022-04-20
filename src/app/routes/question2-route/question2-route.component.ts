//tslint:disable
import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question2-route',
  templateUrl: './question2-route.component.html',
  styleUrls: ['./question2-route.component.css']
})
export class Question2RouteComponent implements OnInit {

  user;
  question2:string;
  answer2:string;
  answer2User:string;
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
          this.answer2 = user.answer2;
          this.question2 = user.question2;
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

    if(this.answer2User=='' || this.answer2User==null){
      this.mensajeMostrar=true;
    }else{
      this.mensajeMostrar=false;
      this._doctorService.answer2User = this.answer2User;
      this.navigateTo('/reset-password/question3')
    }
  }


}
