//tslint:disable
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {DoctorService} from "../../services/doctor.service";

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  user;

  constructor(
    public readonly _authService:AuthService,
    private readonly _doctorService:DoctorService,
    private readonly _router : Router,
  ) { }

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

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

}
