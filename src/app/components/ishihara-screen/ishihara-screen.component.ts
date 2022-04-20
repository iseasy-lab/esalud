//tslint:disable
import { Component, OnInit } from '@angular/core';
import {ImageIshiharaService} from "../../services/imageIshihara.service";
import {Router} from "@angular/router";
import {interval, Subscription, timer} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {MedicalcenterService} from "../../services/medicalcenter.service";

@Component({
  selector: 'app-ishihara-screen',
  templateUrl: './ishihara-screen.component.html',
  styleUrls: ['./ishihara-screen.component.css']
})
export class IshiharaScreenComponent implements OnInit {
  arrayOfImages = [];
  arrayOfImagesBackUp = [];
  arrayOfObservable = [];
  private updateSubscription: Subscription;
  timeCounter=0;
  buscar;

  constructor(
    public readonly _authService:AuthService,
    private readonly _imageIshiharaService : ImageIshiharaService,
    private readonly _medicalCenterService : MedicalcenterService,
    private readonly _router : Router
  ) { }


  ngOnInit(): void {
    // this.traerTodasImagenes();
    // this.updateSubscription = interval(1000).subscribe(
    this.updateSubscription = interval(500).subscribe(
      (val) => {
        this.traerTodasImagenes();
        this.timeCounter = this.timeCounter+1
        console.log(this.timeCounter)
        if(this.timeCounter === 3){
          this.updateSubscription.unsubscribe();
        }
      });
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  traerTodasImagenes(){
    const observabeTraerTodas = this._imageIshiharaService.getAll();
    const suscripcion = observabeTraerTodas.subscribe(
      (data)=>{
        this.arrayOfImages = data as any[];
        this.arrayOfImagesBackUp = data as any[];
        console.log(data);
      },
      (error)=>{
        console.error(error);
      }
    );
    this.arrayOfObservable.push(suscripcion);
  }

  deleteImage(idImageEliminar){
    if(confirm("¿Seguro que desea eliminar la imagen seleccionada?")) {
      var imageEliminar={
        "status" : false
      }
      try {
        this._imageIshiharaService.edit(
          imageEliminar, idImageEliminar
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            this.arrayOfImages = [];
            this.traerTodasImagenes()

            const url = ['/imagesIshihara'];
            this._router.navigate(url);
          }
        );
      }catch (e){
        console.log('Error', e);
      }
    }
  }




  printear(){
    if(this.buscar !="" && this.buscar != undefined && this.buscar != null){
      console.log(this.buscar)
      const observableBuscarTodos = this._imageIshiharaService.getAllLookingFor(this.buscar);
      const susccripcion = observableBuscarTodos
        .subscribe(
          (data)=>{
            this.arrayOfImages = data as any[];
            console.log(data);
          },
          (error)=>{
            console.log(error);
          }
        );
      this.arrayOfObservable.push(susccripcion);
    } else{
      this.arrayOfImages = this.arrayOfImagesBackUp;
    }

  }



}
