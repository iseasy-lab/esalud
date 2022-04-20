//tslint:disable

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-formulario-crear-medicalrecord',
  templateUrl: './formulario-crear-medicalrecord.component.html',
  styleUrls: ['./formulario-crear-medicalrecord.component.css']
})
export class FormularioCrearMedicalrecordComponent implements OnInit {


  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.today.getFullYear();


patientForm;
ageForm;
actual_date_unformatted = new Date();
actual_date = this.yyyy + '-' + this.mm + '-' + this.dd;
actual_year = this.actual_date_unformatted.getFullYear();
// actual_date = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDay();
idMedicalRecord;

  @Input()
  mostrarFormularioInput: boolean;

  @Input()
  reasonInput: string

  @Input()
  dateInput: string

  @Input()
  ageInput: string

  @Input()
  lensometryREInput: string

  @Input()
  lensometryLEInput: string

  @Input()
  avREInput: string

  @Input()
  avLEInput: string

  @Input()
  avREFinalInput: string

  @Input()
  avLEFinalInput: string

  @Input()
  sphereREInput: string

  @Input()
  sphereLEInput: string

  @Input()
  cylinderREInput: string

  @Input()
  cylinderLEInput: string

  @Input()
  axisREInput: string

  @Input()
  axisLEInput: string

  @Input()
  prismREInput:string

  @Input()
  prismLEInput: string

  @Input()
  ADDInput: string

  @Input()
  DPInput: string

  @Input()
  ALTInput: string

  @Input()
  remarkInput:string

  @Input()
  indicationsInput:string

  @Input()
  lunaTipoInput:string

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>()


  constructor(
    public readonly _authService:AuthService,
  private readonly _patientService: PatientService,
  private readonly _activatedRoute: ActivatedRoute,
  private readonly _router : Router,
  ) { }

  /*
  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }
*/


  reason: string
  date: string
  age: number
  lensometryRE: string
  lensometryLE: string
  avRE: string
  avLE: string
  sphereRE: string
  sphereLE: string
  cylinderRE: string
  cylinderLE: string
  axisRE: string
  axisLE: string
  prismRE:string
  prismLE: string
  avREFinal: string
  avLEFinal: string
  ADD: string
  DP: string
  ALT: string
  remark:string
  indications:string
  lunaTipo:string
  patient:number


  ngOnInit(): void {

    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.idPatient);
        this.idMedicalRecord = Number(parametros.id);
        const obsPatient = this._patientService.getOne(id);
        obsPatient
          .subscribe(
            (patient:any)=>{
              this.patientForm = patient;
              // console.log(patient);

              this.ageForm = this.actual_year -  parseInt(patient.date_of_birth.substring(0,4));
              this.age = this.ageForm;
              // console.log('MES')
              // console.log(patient.date_of_birth)
               console.log(parseInt(patient.date_of_birth.substring(5,10)))

              if(parseInt(this.mm) <= parseInt(patient.date_of_birth.substring(5,7))){
                if(parseInt(this.dd) <= parseInt(patient.date_of_birth.substring(8,10))){
                this.age = (this.ageForm - 1)
                }
              }


              // console.log(this.actual_date);
            },
            (error)=>{
              console.error('Error', error)
            }
          )
      }
    );

    console.log("no editando");
    if(this.reasonInput ){
    // if(this.ageInput && this.reasonInput && this.dateInput){
      console.log("editando");
      this.reason = this.reasonInput;
      this.date = this.dateInput;
      this.age = parseInt( this.ageInput);
      this.lensometryRE = this.lensometryREInput;
      this.lensometryLE = this.lensometryLEInput;
      this.avRE = this.avREInput;
      this.avLE = this.avLEInput;
      this.avREFinal = this.avREFinalInput;
      this.avLEFinal = this.avLEFinalInput;
      this.sphereRE = this.sphereREInput;
      this.sphereLE = this.sphereLEInput;
      this.cylinderRE = this.cylinderREInput;
      this.cylinderLE = this.cylinderLEInput;
      this.axisRE = this.axisREInput;
      this.axisLE = this.axisLEInput;
      this.prismRE = this.prismREInput;
      this.prismLE  = this.prismLEInput;
      this.ADD = this.ADDInput;
      this.DP = this.DPInput;
      this.ALT = this.ALTInput;
      this.remark = this.remarkInput;
      this.lunaTipo=this.lunaTipoInput
      this.indications = this.indicationsInput;
    }
  }

  createMedicalRecord(medicalRecord){
    if(!this.mostrarFormularioInput){
      console.log("Creando");
      console.log(medicalRecord);
      this.informacionValidada.emit(
        {
          reason: this.reason,
          date: this.actual_date,
          age: this.ageForm,
          lensometryRE: this.lensometryRE,
          lensometryLE: this.lensometryLE,
          avRE: this.avRE,
          avLE: this.avLE,
          sphereRE: this.sphereRE,
          sphereLE: this.sphereLE,
          cylinderRE: this.cylinderRE,
          cylinderLE: this.cylinderLE,
          axisRE: this.axisRE,
          axisLE: this.axisLE,
          prismRE: this.prismRE,
          prismLE: this.prismLE,
          avREFinal: this.avREFinal,
          avLEFinal: this.avLEFinal,
          ADD: this.ADD,
          DP: this.DP,
          ALT: this.ALT,
          remark: this.remark,
          indications: this.indications,
          lunaTipo: this.lunaTipo,
          patient: this.patientForm.id
        }
      )
    }else{
      console.log("Editando");
      console.log(medicalRecord);
      this.informacionValidada.emit(
        {
          reason: this.reason,
          lensometryRE: this.lensometryRE,
          lensometryLE: this.lensometryLE,
          avRE: this.avRE,
          avLE: this.avLE,
          sphereRE: this.sphereRE,
          sphereLE: this.sphereLE,
          cylinderRE: this.cylinderRE,
          cylinderLE: this.cylinderLE,
          axisRE: this.axisRE,
          axisLE: this.axisLE,
          prismRE: this.prismRE,
          prismLE: this.prismLE,
          avREFinal: this.avREFinal,
          avLEFinal: this.avLEFinal,
          ADD: this.ADD,
          DP: this.DP,
          ALT: this.ALT,
          remark: this.remark,
          indications: this.indications,
          lunaTipo: this.lunaTipo,
          patient: this.patientForm.id
        }
      )
    }

  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

}
