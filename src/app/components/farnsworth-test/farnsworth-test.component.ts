//tslint:disable
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FarnsworthTestService} from "../../services/farnsworth-test.service";
import {MedicalrecordService} from "../../services/medicalrecord.service";
import {AuthService} from "../../services/auth.service";


declare function aviso():void;
@Component({
  selector: 'app-farnsworth-test',
  templateUrl: './farnsworth-test.component.html',
  styleUrls: ['./farnsworth-test.component.css']
})
export class FarnsworthTestComponent implements OnInit {

  medicalRecord;
  testFarnsworth;
  conclusion="";

  finalizado = false;

  score1 = [];
  score2 = [];
  score3 = [];
  score4 = [];

  finalScore=0;
  arrayOfTotalScore=[];

  mdp1 = [];
  mdp2 = [];
  mdp3 = [];
  mdp4 = [];

  numMdp1 = [];
  numMdp2 = [];
  numMdp3 = [];
  numMdp4 = [];

  arrayBox1 = [
    {
      color: '#c66c64',
      position: 0
    },
    {
      color: '#c56c64',
      position: 1
    },
    {
      color: '#c36c5b',
      position: 2
    },
    {
      color: '#c66b58',
      position: 3
    },
    {
      color: '#bd674c',
      position: 4
    },
    {
      color: '#ba694c',
      position: 5
    },
    {
      color: '#b86847',
      position: 6
    },
    {
      color: '#b86940',
      position: 7
    },
    {
      color: '#b46b40',
      position: 8
    },
    {
      color: '#b3703b',
      position: 9
    },
    {
      color: '#b57339',
      position: 10
    },
    {
      color: '#b77538',
      position: 11
    },
    {
      color: '#b97834',
      position: 12
    },
    {
      color: '#b77828',
      position: 13
    },
    {
      color: '#b47d2a',
      position: 14
    },
    {
      color: '#b38128',
      position: 15
    },
    {
      color: '#af862a',
      position: 16
    },
    {
      color: '#a8832a',
      position: 17
    },
    {
      color: '#ab9130',
      position: 18
    },
    {
      color: '#a79030',
      position: 19
    },
    // {
    //   color: '#a28f30',
    //   position: 20
    // },
  ];
  arrayBox2 = [
    {
      color: '#96993e',
      position: 0
    },
    {
      color: '#919b44',
      position: 1
    },
    {
      color: '#8c9949',
      position: 2
    },
    // {
    //   color: '#7CA255',
    //   position: 2
    // },
    {
      color: '#889d4e',
      position: 3
    },
    {
      color: '#819d50',
      position: 4
    },
    {
      color: '#7ca15c',
      position: 5
    },
    {
      color: '#7ca259',
      position: 6
    },
    {
      color: '#76a45c',
      position: 7
    },
    {
      color: '#71a163',
      position: 8
    },
    {
      color: '#69a663',
      position: 9
    },
    {
      color: '#5da76c',
      position: 10
    },
    {
      color: '#5ca971',
      position: 11
    },
    {
      color: '#5ca47a',
      position: 12
    },
    {
      color: '#51a573',
      position: 13
    },
    {
      color: '#51a573',
      position: 14
    },
    {
      color: '#439D77',
      position: 15
    },
    {
      color: '#46A67D',
      position: 16
    },
    {
      color: '#40a482',
      position: 17
    },
    {
      color: '#43a186',
      position: 18
    },
    {
      color: '#3da489',
      position: 19
    },
    // {
    //   color: '#3ca78b',
    //   position: 20
    // }
  ];
  arrayBox3 = [
    {
      color: '#3aa395',
      position: 0
    },
    {
      color: '#36a499',
      position: 1
    },
    {
      color: '#27a49c',
      position: 2
    },
    {
      color: '#21a79c',
      position: 3
    },
    {
      color: '#2ba8a0',
      position: 4
    },
    {
      color: '#2fa6a4',
      position: 5
    },
    {
      color: '#36a7ab',
      position: 6
    },
    {
      color: '#3ca3b2',
      position: 7
    },
    {
      color: '#3ca2b8',
      position: 8
    },
    {
      color: '#40a3b6',
      position: 9
    },
    {
      color: '#4da3be',
      position: 10
    },
    {
      color: '#59a1b7',
      position: 11
    },
    {
      color: '#5a9dba',
      position: 12
    },
    {
      color: '#619bc0',
      position: 13
    },
    {
      color: '#6096bc',
      position: 14
    },
    {
      color: '#699ac2',
      position: 15
    },
    {
      color: '#6b96c3',
      position: 16
    },
    {
      color: '#7193c0',
      position: 17
    },
    {
      color: '#7691c0',
      position: 18
    },
    {
      color: '#7688b6',
      position: 19
    },
    // {
    //   color: '#838bbc',
    //   position: 20
    // }
  ];
  arrayBox4 = [
    {
      color: '#8790bb',
      position: 0
    },
    {
      color: '#8c8dbb',
      position: 1
    },
    {
      color: '#918eb9',
      position: 2
    },
    {
      color: '#948eb2',
      position: 3
    },
    {
      color: '#9a8bb6',
      position: 4
    },
    {
      color: '#9c8ab2',
      position: 5
    },
    {
      color: '#a589b1',
      position: 6
    },
    {
      color: '#a686af',
      position: 7
    },
    {
      color: '#aa82a5',
      position: 8
    },
    {
      color: '#af83a4',
      position: 9
    },
    {
      color: '#ae7a9e',
      position: 10
    },
    {
      color: '#b77a9b',
      position: 11
    },
    {
      color: '#be7d9b',
      position: 12
    },
    {
      color: '#bd7894',
      position: 13
    },
    {
      color: '#be768e',
      position: 14
    },
    {
      color: '#c17285',
      position: 15
    },
    {
      color: '#c66e7c',
      position: 16
    },
    {
      color: '#c87585',
      position: 17
    },
    {
      color: '#c66f77',
      position: 18
    },
    {
      color: '#c06a6d',
      position: 19
    }
  ];

  scale=this.arrayBox1.concat(this.arrayBox2.concat(this.arrayBox3.concat(this.arrayBox4)))
name:string;

  drop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arrayBox1, event.previousIndex, event.currentIndex);
    // console.log(this.arrayBox1)
  }
  drop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arrayBox2, event.previousIndex, event.currentIndex);
    // console.log(this.arrayBox2)
  }
  drop3(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arrayBox3, event.previousIndex, event.currentIndex);
    // console.log(this.arrayBox3)
  }
  drop4(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arrayBox4, event.previousIndex, event.currentIndex);
    // console.log(this.arrayBox4)
  }

  constructor(
    private readonly  _activatedRoute : ActivatedRoute,
    private readonly _farnsworthTestService : FarnsworthTestService,
    private readonly _medicalRecordService : MedicalrecordService,
    private readonly _router : Router,
    private readonly _authService : AuthService,
  ) {
    // aviso();
  }

  ngOnInit(): void {
    this.name=this._authService.userName;
    this.shuffle(this.arrayBox1);
    this.shuffle(this.arrayBox2);
    this.shuffle(this.arrayBox3);
    this.shuffle(this.arrayBox4);

    const obsRuta2 = this._activatedRoute.params;
    obsRuta2.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.idMedicalRecord);
        // console.log(id);
        const obsMedicalRecord = this._medicalRecordService.getOne(id);
        obsMedicalRecord
          .subscribe(
            (medicalRecord:any)=>{
              this.medicalRecord = medicalRecord;
            },
            (error)=>{
              console.error('Error', error)
            }
          )
      }
    );

  }

   shuffle (array) {
    // console.log(array);
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    // console.log(array);
    return array;
  }

  calcularTest() {
    // console.log(this.arrayBox1);
    // console.log(this.arrayBox2);
    // console.log(this.arrayBox3);
    // console.log(this.arrayBox4);

    // console.log(this.medicalRecord.age)

    // agregar mdp
    var arrayOfArrays = [this.arrayBox1,this.arrayBox2,this.arrayBox3,this.arrayBox4];
    var arrayOfNumMdp = [this.numMdp1,this.numMdp2,this.numMdp3,this.numMdp4];
    var arrayOfMdp = [this.mdp1,this.mdp2,this.mdp3,this.mdp4];
    var arrayOfScore = [this.score1,this.score2,this.score3,this.score4];

    var iterationCount = 0;
    arrayOfArrays.forEach(arrayBox => {
      // console.log(iterationCount);
      // console.log(arrayOfArrays[iterationCount]);

      for(let i=0; i < arrayBox.length-1; i ++){
        let valueMdp = arrayBox[i].position - arrayBox[i+1].position;
        if(valueMdp>0){
          // this.numMdp1.push(valueMdp);
          arrayOfNumMdp[iterationCount].push(valueMdp)
        }else{
          arrayOfNumMdp[iterationCount].push(valueMdp*(-1))
        }
        // hasta aqui se llena el numMdp
      }
      // console.log(arrayOfNumMdp[iterationCount]);

      // ahora se deben sumar los mdp
      for(let i=0; i < arrayOfNumMdp[iterationCount].length-1; i ++){
        let sumaMdps = arrayOfNumMdp[iterationCount][i] + arrayOfNumMdp[iterationCount][i+1];
        arrayOfMdp[iterationCount].push(sumaMdps);
      }
      // console.log(arrayOfMdp[iterationCount]);

      // calcular el score
      for(let i=0; i < arrayOfMdp[iterationCount].length; i ++){
        let score = arrayOfMdp[iterationCount][i] - 2;
        arrayOfScore[iterationCount].push(score);
      }
      // console.log(arrayOfScore[iterationCount]);
      //hasta aqui se calcula la puntuacion

      iterationCount++;
    })

    for(let i=0; i < arrayOfScore.length; i ++){
      for(let j=0; j < arrayOfScore[i].length; j ++){
        this.finalScore = this.finalScore + arrayOfScore[i][j];

        if(j==0 || j==arrayOfScore[i].length-1){
          this.arrayOfTotalScore.push(0);
        }

        // subir este como resultado
        this.arrayOfTotalScore.push(arrayOfScore[i][j]);
        // subir el final score tambien


      }
    }

    // console.log(this.arrayOfTotalScore);
    // console.log(this.scale);

    if(10 <= this.medicalRecord.age && this.medicalRecord.age <= 14){
      if(this.finalScore<=193){
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 193 para su rango de edad de entre 10 y 14 años. " +
          "\nEl paciente no presenta graves problemas de distinción cromática."
      }else{
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 193 para su rango de edad de entre 10 y 14 años. " +
          "\n El paciente presenta problemas de distinción cromática. \n En la siguiente escala cromática la leyenda representa:" +
          "\n - Blanco: tonos que el paciente distingue correctamente." +
          "\n - Gris: tonos en los que el paciente tiene una ligera pérdida de la distinción del contraste." +
          "\n - Negro: tonos que el paciente no distingue."
      }
    }
    if(15 <= this.medicalRecord.age && this.medicalRecord.age <= 19){
      if(this.finalScore<=122){
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 122 para " +
          "su rango de edad de entre 15 y 19 años. " +
          "\nEl paciente no presenta graves problemas de distinción cromática."
      }else{
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 122 para " +
          "su rango de edad de entre 15 y 19 años. " +
          "\n El paciente presenta problemas de distinción cromática. \n En la siguiente escala cromática la leyenda representa:" +
          "\n - Blanco: tonos que el paciente distingue correctamente." +
          "\n - Gris: tonos en los que el paciente tiene una ligera pérdida de la distinción del contraste." +
          "\n - Negro: tonos que el paciente no distingue."
      }
    }
    if(20<= this.medicalRecord.age && this.medicalRecord.age <= 29){
      if(this.finalScore<=107){
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 107 para " +
          "su rango de edad de entre 20 y 29 años. " +
          "\nEl paciente no presenta graves problemas de distinción cromática."
      }else{
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 107 para " +
          "su rango de edad de entre 20 y 29 años. " +
          "\n El paciente presenta problemas de distinción cromática. \n En la siguiente escala cromática la leyenda representa:" +
          "\n - Blanco: tonos que el paciente distingue correctamente." +
          "\n - Gris: tonos en los que el paciente tiene una ligera pérdida de la distinción del contraste." +
          "\n - Negro: tonos que el paciente no distingue."
      }
    }
    if(30 <= this.medicalRecord.age && this.medicalRecord.age <= 39){
      if(this.finalScore<=133){
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 133 para " +
          "su rango de edad de entre 30 y 39 años. " +
          "\nEl paciente no presenta graves problemas de distinción cromática."
      }else{
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 133 para " +
          "su rango de edad de entre 30 y 39 años. " +
          "\n El paciente presenta problemas de distinción cromática. \n En la siguiente escala cromática la leyenda representa:" +
          "\n - Blanco: tonos que el paciente distingue correctamente." +
          "\n - Gris: tonos en los que el paciente tiene una ligera pérdida de la distinción del contraste." +
          "\n - Negro: tonos que el paciente no distingue."
      }
    }
    if(40 <= this.medicalRecord.age && this.medicalRecord.age <= 49){
      if(this.finalScore<=188){
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 188 para " +
          "su rango de edad de entre 40 y 49 años. " +
          "\nEl paciente no presenta graves problemas de distinción cromática."
      }else{
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 188 para " +
          "su rango de edad de entre 40 y 49 años. " +
          "\n El paciente presenta problemas de distinción cromática. \n En la siguiente escala cromática la leyenda representa:" +
          "\n - Blanco: tonos que el paciente distingue correctamente." +
          "\n - Gris: tonos en los que el paciente tiene una ligera pérdida de la distinción del contraste." +
          "\n - Negro: tonos que el paciente no distingue."
      }
    }
    if(50 <= this.medicalRecord.age && this.medicalRecord.age <= 59){
      if(this.finalScore<=234){
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 234 para " +
          "su rango de edad de entre 50 y 59 años. " +
          "\nEl paciente no presenta graves problemas de distinción cromática."
      }else{
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 234 para " +
          "su rango de edad de entre 50 y 59 años. " +
          "\n El paciente presenta problemas de distinción cromática. \n En la siguiente escala cromática la leyenda representa:" +
          "\n - Blanco: tonos que el paciente distingue correctamente." +
          "\n - Gris: tonos en los que el paciente tiene una ligera pérdida de la distinción del contraste." +
          "\n - Negro: tonos que el paciente no distingue."
      }
    }
    if(60 <= this.medicalRecord.age && this.medicalRecord.age <= 69){
      if(this.finalScore<=268){
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 268 para " +
          "su rango de edad de entre 60 y 69 años. " +
          "\nEl paciente no presenta graves problemas de distinción cromática."
      }else{
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 268 para " +
          "su rango de edad de entre 60 y 69 años. " +
          "\n El paciente presenta problemas de distinción cromática. \n En la siguiente escala cromática la leyenda representa:" +
          "\n - Blanco: tonos que el paciente distingue correctamente." +
          "\n - Gris: tonos en los que el paciente tiene una ligera pérdida de la distinción del contraste." +
          "\n - Negro: tonos que el paciente no distingue."
      }
    }
    if(70 <= this.medicalRecord.age){
    // if(70 <= this.medicalRecord.age && this.medicalRecord.age >= 80){
      if(this.finalScore<=317){
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 317 para " +
          "su rango de edad de más de 70 años. " +
          "\nEl paciente no presenta graves problemas de distinción cromática."
      }else{
        this.conclusion = "La puntuación alcanzada fue " + this.finalScore + " y el valor máximo de referencia es 317 para " +
          "su rango de edad de más de 70 años. " +
          "\n El paciente presenta problemas de distinción cromática. \n En la siguiente escala cromática la leyenda representa:" +
          "\n - Blanco: tonos que el paciente distingue correctamente." +
          "\n - Gris: tonos en los que el paciente tiene una ligera pérdida de la distinción del contraste." +
          "\n - Negro: tonos que el paciente no distingue."
      }
    }

    this.finalizado = true;

    /*
    for(let i=0; i < this.arrayBox1.length-1; i ++){
      // console.log(this.arrayBox1[i].position);
      let valueMdp = this.arrayBox1[i].position - this.arrayBox1[i+1].position;
      if(valueMdp>0){
        this.numMdp1.push(valueMdp);
      }else{
        this.numMdp1.push(valueMdp*(-1));
      }
      // hasta aqui se llena el numMdp
    }
    */
    /*
  for(let i=0; i < this.numMdp1.length-1; i ++){
    let sumaMdps = this.numMdp1[i] + this.numMdp1[i+1];
    this.mdp1.push(sumaMdps);
  }
  */
    /*
    console.log(this.mdp1);
    // calcular el score
    for(let i=0; i < this.mdp1.length; i ++){
      let score = this.mdp1[i] - 2;
      this.score1.push(score);
    }

    console.log(this.score1);
    //hasta aqui se calcula la puntuacion
*/

  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate([navigate]);
  }

  subirTest(){
    // POST DEL TEST ISHIHARA

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var todayStr = yyyy.toString() + '-' + mm.toString() + '-' + dd.toString();

    this.testFarnsworth = {
      "score": this.arrayOfTotalScore,
      "age": this.medicalRecord.age,
      "conclusion": this.conclusion,
      "medical_record": this.medicalRecord.id,
      "date" : todayStr
    }

    console.log(this.testFarnsworth)

    try {
      this._farnsworthTestService.create(
        this.testFarnsworth
      ).subscribe(
        res => {
          console.log('Respuesta del servidor', res);
          const url = ['/tests/'+this.medicalRecord.id];
          this._router.navigate(url);
        }
      );
    }catch (e){
      console.log('Error', e);
    }


  }



}

/*

  arrayBox1 = [
    {
      color: '#c66c64',
      position: 0
    },
    {
      color: '#c56c64',
      position: 1
    },
    {
      color: '#c36c5b',
      position: 2
    },
    {
      color: '#c66b58',
      position: 3
    },
    {
      color: '#bd674c',
      position: 4
    },
    {
      color: '#ba694c',
      position: 5
    },
    {
      color: '#b86847',
      position: 6
    },
    {
      color: '#b86940',
      position: 7
    },
    {
      color: '#b46b40',
      position: 8
    },
    {
      color: '#b3703b',
      position: 9
    },
    {
      color: '#b57339',
      position: 10
    },
    {
      color: '#b77538',
      position: 11
    },
    {
      color: '#b97834',
      position: 12
    },
    {
      color: '#b77828',
      position: 13
    },
    {
      color: '#b47d2a',
      position: 14
    },
    {
      color: '#b38128',
      position: 15
    },
    {
      color: '#af862a',
      position: 16
    },
    {
      color: '#a8832a',
      position: 17
    },
    {
      color: '#ab9130',
      position: 18
    },
    {
      color: '#a79030',
      position: 19
    },
    // {
    //   color: '#a28f30',
    //   position: 20
    // },
  ];
  arrayBox2 = [
    {
      color: '#96993e',
      position: 0
    },
    {
      color: '#919b44',
      position: 1
    },
    {
      color: '#8c9949',
      position: 2
    },
    // {
    //   color: '#7CA255',
    //   position: 2
    // },
    {
      color: '#889d4e',
      position: 3
    },
    {
      color: '#819d50',
      position: 4
    },
    {
      color: '#7ca15c',
      position: 5
    },
    {
      color: '#7ca259',
      position: 6
    },
    {
      color: '#76a45c',
      position: 7
    },
    {
      color: '#71a163',
      position: 8
    },
    {
      color: '#69a663',
      position: 9
    },
    {
      color: '#5da76c',
      position: 10
    },
    {
      color: '#5ca971',
      position: 11
    },
    {
      color: '#5ca47a',
      position: 12
    },
    {
      color: '#51a573',
      position: 13
    },
    {
      color: '#51a573',
      position: 14
    },
    {
      color: '#439D77',
      position: 15
    },
    {
      color: '#46A67D',
      position: 16
    },
    {
      color: '#40a482',
      position: 17
    },
    {
      color: '#43a186',
      position: 18
    },
    {
      color: '#3da489',
      position: 19
    },
    // {
    //   color: '#3ca78b',
    //   position: 20
    // }
  ];
  arrayBox3 = [
    {
      color: '#3aa395',
      position: 0
    },
    {
      color: '#36a499',
      position: 1
    },
    {
      color: '#27a49c',
      position: 2
    },
    {
      color: '#21a79c',
      position: 3
    },
    {
      color: '#2ba8a0',
      position: 4
    },
    {
      color: '#2fa6a4',
      position: 5
    },
    {
      color: '#36a7ab',
      position: 6
    },
    {
      color: '#3ca3b2',
      position: 7
    },
    {
      color: '#3ca2b8',
      position: 8
    },
    {
      color: '#40a3b6',
      position: 9
    },
    {
      color: '#4da3be',
      position: 10
    },
    {
      color: '#59a1b7',
      position: 11
    },
    {
      color: '#5a9dba',
      position: 12
    },
    {
      color: '#619bc0',
      position: 13
    },
    {
      color: '#6096bc',
      position: 14
    },
    {
      color: '#699ac2',
      position: 15
    },
    {
      color: '#6b96c3',
      position: 16
    },
    {
      color: '#7193c0',
      position: 17
    },
    {
      color: '#7691c0',
      position: 18
    },
    {
      color: '#7688b6',
      position: 19
    },
    // {
    //   color: '#838bbc',
    //   position: 20
    // }
  ];
  arrayBox4 = [
    {
      color: '#8790bb',
      position: 0
    },
    {
      color: '#8c8dbb',
      position: 1
    },
    {
      color: '#918eb9',
      position: 2
    },
    {
      color: '#948eb2',
      position: 3
    },
    {
      color: '#9a8bb6',
      position: 4
    },
    {
      color: '#9c8ab2',
      position: 5
    },
    {
      color: '#a589b1',
      position: 6
    },
    {
      color: '#a686af',
      position: 7
    },
    {
      color: '#aa82a5',
      position: 8
    },
    {
      color: '#af83a4',
      position: 9
    },
    {
      color: '#ae7a9e',
      position: 10
    },
    {
      color: '#b77a9b',
      position: 11
    },
    {
      color: '#be7d9b',
      position: 12
    },
    {
      color: '#bd7894',
      position: 13
    },
    {
      color: '#be768e',
      position: 14
    },
    {
      color: '#c17285',
      position: 15
    },
    {
      color: '#c66e7c',
      position: 16
    },
    {
      color: '#c87585',
      position: 17
    },
    {
      color: '#c66f77',
      position: 18
    },
    {
      color: '#c06a6d',
      position: 19
    }
  ];

*/

/*
box1
#c6716c
c56c64
c36c5b
c66b58
bd674c
ba694c
b86847
b86940
b46b40
b3703b
b57339
b77538
b97834
b77828
b47d2a
b38128
af862a
a8832a
ab9130
a79030
a28f30
97922a
*/

/* box2
97922a
96993e
919b44
8c9949
7CA255
889d4e
819d50
7ca15c
7ca259
76a45c
71a163
69a663
5da76c
5ca47a
5ca971
51a573
4FA574
439d77
45a67d
40a482
43a186
3da489
3ca78b
3aa48d

 */

/*box 3 3aa48d 3aa395
36a499
27a49c
21a79c
2ba8a0
2fa6a4
36a7ab
3ca3b2
3ca2b8
40a3b6
4da3be
59a1b7
5a9dba
619bc0
6096bc
699ac2
6b96c3
7193c0
7691c0
7688b6
838bbc
 */

/*
box 4
838bbc
8790bb
8c8dbb
918eb9
948eb2
9a8bb6
9c8ab2
a589b1
a686af
aa82a5
af83a4
ae7a9e
b77a9b
be7d9b
bd7894
be768e
c17285
c66e7c
c87585
c66f77
c06a6d

ca7175

 */

