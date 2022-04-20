//tslint:disable
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ConsultationService} from "../../services/consultation.service";
import {AuthService} from "../../services/auth.service";
import {MedicalcenterService} from "../../services/medicalcenter.service";

@Component({
  selector: 'app-consultation-view-route',
  templateUrl: './consultation-view-route.component.html',
  styleUrls: ['./consultation-view-route.component.css']
})
export class ConsultationViewRouteComponent implements OnInit {
  consultation;
  medicalCenter;
  idMedicalCenter:number;


  constructor(
    public readonly _authService:AuthService,
    private readonly _consultationService:ConsultationService,
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _medicalCenterService : MedicalcenterService,
    private readonly _router : Router,
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        const obsDoctor = this._consultationService.getOne(id);
        obsDoctor
          .subscribe(
            (consultation:any)=>{
              this.consultation = consultation;
              this.traerCentroMedico()
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

  traerCentroMedico(){
    const id = Number(this.consultation.idMedicalCenter);
    console.log("this.consultation.idMedicalCenter")
    console.log(this.consultation.idMedicalCenter)
    const obsIdMedicalCenter = this._medicalCenterService.getOne(id);
    obsIdMedicalCenter.subscribe(
      (medicalCenter:any)=>{
        this.medicalCenter = medicalCenter;
        console.log("this.medicalCenter")
        console.log(this.medicalCenter)
      },
      (error)=>{
        console.error('Error', error)
      }
    )
  }

}
