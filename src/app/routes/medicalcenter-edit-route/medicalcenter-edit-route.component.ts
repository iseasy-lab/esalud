// tslint:disable
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MedicalcenterService} from "../../services/medicalcenter.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-medicalcenter-edit-route',
  templateUrl: './medicalcenter-edit-route.component.html',
  styleUrls: ['./medicalcenter-edit-route.component.css']
})
export class MedicalcenterEditRouteComponent implements OnInit {

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

  editMedicalCenter(){
    this.medicalCenter = {
      "name": this.name,
      "address": this.address,
      "contact": this.contact,
      "email": this.email,
      "phone": this.phone,
      "cel": this.cel,
      "status": this.status
    }

    try {
      this._medicalCenterService.edit(
        this.medicalCenter, this.idMedicalCenter
      ).subscribe(
        res => {
          console.log('Respuesta del servidor', res);
          const url = ['/medicalCenter'];
          this._router.navigate(url);
        }
      );
    }catch (e){
      console.log('Error', e);
    }

  }


}
