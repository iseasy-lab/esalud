//tslint:disable
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {DoctorService} from "../../services/doctor.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-profile-view-route',
  templateUrl: './profile-view-route.component.html',
  styleUrls: ['./profile-view-route.component.css']
})
export class ProfileViewRouteComponent implements OnInit {
  user;

  constructor(
    public readonly _authService:AuthService,
    private readonly _doctorService:DoctorService,
    private readonly _activatedRoute:ActivatedRoute,
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
