// tslint:disable
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MedicalcenterService} from "../../services/medicalcenter.service";
import {DoctorService} from "../../services/doctor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medicalcenter-create-route',
  templateUrl: './medicalcenter-create-route.component.html',
  styleUrls: ['./medicalcenter-create-route.component.css']
})
export class MedicalcenterCreateRouteComponent implements OnInit {

  constructor(
    public readonly _authService:AuthService,
    private readonly _medicalCenterService : MedicalcenterService,
    private readonly _router:Router
  ) { }

  medicalCenter;
  name: string
  address: string
  contact: string
  email: string
  phone: string
  cel: string
  status: boolean

  ngOnInit(): void {
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  createMedicalCenter(){

    this.medicalCenter = {
      "name": this.name,
      "address": this.address,
      "contact": this.contact,
      "email": this.email,
      "phone": this.phone,
      "cel": this.cel,
      "status": true
    }

    try {
      this._medicalCenterService.create(
        this.medicalCenter
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
