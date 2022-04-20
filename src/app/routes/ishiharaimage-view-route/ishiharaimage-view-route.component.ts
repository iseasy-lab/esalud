//tslint:disable
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ImageIshiharaService} from "../../services/imageIshihara.service";
import {AuthService} from "../../services/auth.service";
import {MedicalcenterService} from "../../services/medicalcenter.service";

@Component({
  selector: 'app-ishiharaimage-view-route',
  templateUrl: './ishiharaimage-view-route.component.html',
  styleUrls: ['./ishiharaimage-view-route.component.css']
})
export class IshiharaimageViewRouteComponent implements OnInit {

  imageIshihara;
  // arrayOfMedicalCenters=[];
  arrayOfObservables = [];
  idMedicalCenter:number;
  medicalCenter;

  constructor(
    public readonly _authService:AuthService,
    private _imageIshiharaService: ImageIshiharaService,
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _router : Router,
    private readonly _medicalCenterService : MedicalcenterService,
  ) { }

  reference_color
  real_result
  status
  statusString

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros:Params)=>{
        const id = Number(parametros.id);
        const obsImageIshihara = this._imageIshiharaService.getOne(id);
        obsImageIshihara.subscribe(
            (imageIshihara:any)=>{
              this.imageIshihara = imageIshihara;
              this.real_result = imageIshihara.real_result;
              this.reference_color = imageIshihara.reference_color;
              this.status = imageIshihara.status;
              this.idMedicalCenter = imageIshihara.idMedicalCenter;
              console.log("this.idMedicalCenter")
              console.log(imageIshihara.idMedicalCenter)

               this.traerCentroMedico();

              if(this.status == true){
                this.statusString = "Habilitado"
              }else{
                this.statusString = "Deshabilitado"
              }
            },
            (error)=>{
              console.error('Error', error)
            }
          )
      }
    )
  }

  // getMedicalCenter(id){
  //   var nombreMedicalCenter;
  //   const obsImageIshihara = this._medicalCenterService.getOne(id);
  //   obsImageIshihara
  //     .subscribe(
  //       (medicalCenter:any)=>{
  //         nombreMedicalCenter = medicalCenter.name;
  //       },
  //       (error)=>{
  //         console.error('Error', error)
  //       }
  //     )
  //   return nombreMedicalCenter;
  // }
  traerCentroMedico(){
    const id = Number(this.imageIshihara.idMedicalCenter);
    console.log("this.imageIshihara.idMedicalCenter")
    console.log(this.imageIshihara.idMedicalCenter)
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

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

}
