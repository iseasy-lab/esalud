//tslint:disable
import { Component, OnInit } from '@angular/core';
import {ImageIshiharaService} from "../../services/imageIshihara.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IshiharatestService} from "../../services/ishiharatest.service";
import {ImageResultIshiharaService} from "../../services/imageResultIshihara.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-ishihara-test',
  templateUrl: './ishihara-test.component.html',
  styleUrls: ['./ishihara-test.component.css']
})
export class IshiharaTestComponent implements OnInit {

  actual_date_unformatted = new Date();
  actual_date = this.actual_date_unformatted.getFullYear() + "-" + this.actual_date_unformatted.getMonth() + "-" + this.actual_date_unformatted.getDay();
  arrayOfImages = [];
  arrayOfObservable = [];
  idMedicalRecord;
  testIshihara;
  testIshiharaId = -1;
  arrayOfImagesResultIshihara = [];
  arrayOfResults = [];
  arrayOfCalificaciones = [];
  conclusion="Existen dificultad para distinguir: \n";
  continue = false;
  name:string;

  testTerminado = false;
  testParaGuardar = false;

  calificar = false;
  comentar = false;




  constructor(
    private readonly _activatedRoute : ActivatedRoute,
    private readonly _imageIshiharaService : ImageIshiharaService,
    private readonly _ishiharaTestService : IshiharatestService,
    private readonly _imageResultIshiharaService : ImageResultIshiharaService,
    private readonly _router : Router,
    private readonly _authService:AuthService
  ) { }


  ngOnInit(): void {
  this.name = this._authService.userName;
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros : Params)=>{
        this.idMedicalRecord = Number(parametros.idMedicalRecord);
      }
    );
    this.traerTodasImagenes();

  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate([navigate]);
  }

  traerTodasImagenes(){
    const observabeTraerTodas = this._imageIshiharaService.getAllTest();
    const suscripcion = observabeTraerTodas.subscribe(
      (data)=>{
        this.arrayOfImages = data as any[];
        // console.log(data);
        for (let i = 0; i < this.arrayOfImages.length; i++) {
          // console.log("agregando")
          this.arrayOfCalificaciones.push("true");
        }
      },
      (error)=>{
        console.error(error);
      }
    );
    this.arrayOfObservable.push(suscripcion);

  }


  terminarTest(){
    this.calificar = true;
    // this.testTerminado = true;
  }

  irACalificar(){
    this.comentar = true;
    var indexesMisses = this.getAllIndexes(this.arrayOfCalificaciones, "false");

    for (let i = 0; i < indexesMisses.length; i++) {
      var conclusionAdded  = this.arrayOfImages[i]["reference_color"];
      this.conclusion = this.conclusion + "- " + conclusionAdded + ".\n";
    }
    if(this.conclusion == "Existen dificultad para distinguir: \n"){
      this.conclusion = "No existen dificultades para distinguir los colores evaluados: \n";
      for (let i = 0; i < this.arrayOfImages.length; i++) {
        var colourAdded  = this.arrayOfImages[i]["reference_color"];
        this.conclusion = this.conclusion + "- " + colourAdded + ".\n";
      }
    }
  }




  obtenerResulst(id){
    var inputVal = (<HTMLInputElement>document.getElementById("result"+id)).value;
    this.arrayOfResults.push(inputVal);
    // console.log(inputVal);
   }


   getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
      indexes.push(i);
    }
    return indexes;
  }

  subirTest() : any{

    // para contar la calificacion
    var countHits = 0;
    var countMisses = 0;
    for (let i = 0; i < this.arrayOfCalificaciones.length; i++) {
      this.obtenerResulst(this.arrayOfImages[i].id);
      if(this.arrayOfCalificaciones[i] == 'true'){
        countHits++;
      }else{
        countMisses++;
      }
    }

    // var indexesMisses = this.getAllIndexes(this.arrayOfCalificaciones, "false");
    //
    // for (let i = 0; i < indexesMisses.length; i++) {
    //   var conclusionAdded  = this.arrayOfImages[i]["reference_color"];
    //     this.conclusion = this.conclusion + "- " + conclusionAdded + ".\n";
    // }
    // if(this.conclusion == "Existen dificultad para distinguir: \n"){
    //   this.conclusion = "No existen dificultades para distinguir los colores evaluados: \n";
    //   for (let i = 0; i < this.arrayOfImages.length; i++) {
    //     var colourAdded  = this.arrayOfImages[i]["reference_color"];
    //     this.conclusion = this.conclusion + "- " + colourAdded + ".\n";
    //   }
    // }

    // console.log('this.conclusion')
    // console.log(this.conclusion)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var todayStr = yyyy.toString() + '-' + mm.toString() + '-' + dd.toString();

    this.testIshihara = {
      'hits': countHits,
      'misses': countMisses,
      'conclusion': this.conclusion,
      'date': todayStr,
      'medical_record':this.idMedicalRecord
    }
    console.log(this.testIshihara)

    // POST DEL TEST ISHIHARA
    try {
      this._ishiharaTestService.create(this.testIshihara).subscribe(
        res => {
          console.log('Respuesta del servidor', res['id']);
          this.testIshiharaId = res['id'];
          // para postear cada imageResult
          for (let i = 0; i < this.arrayOfImages.length; i++) {
            var imageIshiharaResult = {
              'result': this.arrayOfResults[i],
              'real_result': this.arrayOfImages[i]['real_result'],
              'reference_color': this.arrayOfImages[i]['reference_color'],
              'test_ishihara': this.testIshiharaId,
              'image_ishihara': this.arrayOfImages[i]['id']
            };
            // console.log('imageIshiharaResult')
            // console.log(imageIshiharaResult)
            try {
              this._imageResultIshiharaService.create(imageIshiharaResult).subscribe(
                res => {
                  console.log('Respuesta del servidor', res);
                }
              );
            }catch (e){
              console.log('Error', e);
            }
          }
          const url = ['/tests/'+this.idMedicalRecord]
          this._router.navigate(url);
        }
      );
    }catch (e){
      console.log('Error', e);
    }


  }



}
