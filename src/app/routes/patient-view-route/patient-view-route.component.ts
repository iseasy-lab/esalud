//tslint:disable
import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-patient-view-route',
  templateUrl: './patient-view-route.component.html',
  styleUrls: ['./patient-view-route.component.css']
})
export class PatientViewRouteComponent implements OnInit {
  patient;
  estado;

  constructor(
    public readonly _authService:AuthService,
    private readonly _patientService:PatientService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router : Router,

  ) { }


  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        const obsPatient = this._patientService.getOne(id);
        obsPatient
          .subscribe(
            (patient:any)=>{
              this.patient = patient;
              if(patient.status==false){
                this.estado='Deshabilitado'
              }else{
                this.estado='Habilitado'
              }
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
