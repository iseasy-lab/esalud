// tslint:disable
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MedicalcenterService} from "../../services/medicalcenter.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-medicalcenter-view-route',
  templateUrl: './medicalcenter-view-route.component.html',
  styleUrls: ['./medicalcenter-view-route.component.css']
})
export class MedicalcenterViewRouteComponent implements OnInit {

  constructor(
    public readonly _authService:AuthService,
    private readonly _medicalCenterService : MedicalcenterService,
    private readonly _router:Router,
    private readonly _activatedRoute:ActivatedRoute,
  ) { }

  medicalCenter;
  idMedicalCenter:number;
  name: string
  address: string
  contact: string
  email: string
  phone: string
  cel: string
  status: boolean
  statusNoBoolean:string

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        this.idMedicalCenter = id;
        const obsMedicalCenter = this._medicalCenterService.getOne(id);
        obsMedicalCenter
          .subscribe(
            (medicalCenter:any)=>{
              this.medicalCenter = medicalCenter;
              this.name= medicalCenter.name
              this.address= medicalCenter.address
              this.contact= medicalCenter.contact
              this.email= medicalCenter.email
              this.phone= medicalCenter.phone
              this.cel= medicalCenter.cel
              this.status= medicalCenter.status
              if(this.status==true){
                this.statusNoBoolean = 'Habilitado'
              }else{
                this.statusNoBoolean='Inhabilitado'
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
