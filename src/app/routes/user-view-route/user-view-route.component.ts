//tslint:disable
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {DoctorService} from "../../services/doctor.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-user-view-route',
  templateUrl: './user-view-route.component.html',
  styleUrls: ['./user-view-route.component.css']
})
export class UserViewRouteComponent implements OnInit {
  doctor;

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
        const obsDoctor = this._doctorService.getOne(id);
        obsDoctor
          .subscribe(
            (doctor:any)=>{
              this.doctor = doctor;
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


}
