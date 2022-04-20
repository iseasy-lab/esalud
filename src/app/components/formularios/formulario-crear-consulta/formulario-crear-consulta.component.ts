//tslint:disable
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DoctorService} from "../../../services/doctor.service";
import {PatientService} from "../../../services/patient.service";
import {ConsultationService} from "../../../services/consultation.service";
import {Params, Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-formulario-crear-consulta',
  templateUrl: './formulario-crear-consulta.component.html',
  styleUrls: ['./formulario-crear-consulta.component.css']
})
export class FormularioCrearConsultaComponent implements OnInit {

  @Input()
  mostrarFormularioInput : boolean

  @Input()
  dateInput : string

  @Input()
  timeInput : string

  @Input()
  detailInput : string

  @Input()
  statusInput : string

  @Input()
  doctorInput : number

  @Input()
  patientInput : number

  @Output()
  informacionValidada : EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private readonly _doctorService : DoctorService,
    private readonly _patientService : PatientService,
    private readonly _consultationService : ConsultationService,
    private readonly _router : Router,
    public readonly _authService:AuthService,
  ) { }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  doctorsArray = []
  patientsArray = []
  arrayOfObservables = []

  date : string
  time : string
  detail : string
  status : string
  doctor : number
  patient : number


  ngOnInit(): void {
    this.getAllDoctors();
    this.getAllPatients();
    console.log("no editando");
    if(this.patientInput && this.doctorInput){
      // this.getOneDoctor(this.doctorInput);
      this.date = this.dateInput
      this.time = this.timeInput
      this.detail = this.detailInput
      this.status = this.statusInput
      this.doctor = this.doctorInput
      this.patient = this.patientInput
      console.log('este',this.mostrarFormularioInput)
    }
  }


  getAllDoctors(){
    const observableTraerTodos = this._doctorService.getAll();
    const suscripcion = observableTraerTodos
      .subscribe(
        (data)=>{
          this.doctorsArray = data as any[];
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      );
    this.arrayOfObservables.push(suscripcion);
  }


  // getOneDoctor(id){
  //   const observableTraerUno = this._doctorService.getOne(id);
  //   const suscripcion = observableTraerUno
  //     .subscribe(
  //       (data:any)=>{
  //         this.doctorObject = data;
  //         console.log(data);
  //       },
  //       (error)=>{
  //         console.log(error);
  //       }
  //     );
  //   this.arrayOfObservables.push(suscripcion);
  // }

  getAllPatients(){
    const observableTraerTodos = this._patientService.getAll();
    const suscripcion = observableTraerTodos
      .subscribe(
        (data)=>{
          this.patientsArray = data as any[];
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      );
    this.arrayOfObservables.push(suscripcion);
  }

  createConsultation(consultation){
    console.log(consultation);

    if(this.mostrarFormularioInput){
      console.log("Editando");
      if( this.date == "" || this.date == null){
        alert('La fecha no cumple el formato establecido')
      }else{
        this.informacionValidada.emit(
          {
            date : this.date,
            time : this.time,
            detail : this.detail,
            status : this.status
          }
        )
      }

    }else{
      console.log("Creando");
      this.informacionValidada.emit(
        {
          date : this.date,
          time : this.time,
          detail : this.detail,
          status : this.status,
          doctor : this.doctor,
          patient : this.patient
        }
      )
    }

  }

}
