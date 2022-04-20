//tslint:disable
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-patient-edit-route',
  templateUrl: './patient-edit-route.component.html',
  styleUrls: ['./patient-edit-route.component.css']
})
export class PatientEditRouteComponent implements OnInit {
  patientRecibido;
  idPatient:number;
  arrayOfMedicalCenters=[];
  arrayOfObservables = [];
  identification: string
  name: string
  gender: string
  phone: string
  email: string
  address: string
  occupation: string
  date_of_birth: string
  status : boolean
  medicalCenter: number
  // patientEnviado;


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
        this.idPatient = id;
        const obsPatient = this._patientService.getOne(id);
        obsPatient
          .subscribe(
            (patient:any)=>{
              this.patientRecibido = patient;
              this.identification = this.patientRecibido.identification;
              this.name = this.patientRecibido.name;
              this.gender = this.patientRecibido.gender;
              this.phone = this.patientRecibido.phone;
              this.email = this.patientRecibido.email;
              this.address = this.patientRecibido.address;
              this.occupation = this.patientRecibido.occupation;
              this.date_of_birth = this.patientRecibido.date_of_birth;
              this.status = this.patientRecibido.status;
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


  editarPaciente(){
    this.patientRecibido={
      "identification": this.identification,
      "name": this.name,
      "gender": this.gender,
      "phone": this.phone,
      "email": this.email,
      "address": this.address,
      "occupation": this.occupation,
      "date_of_birth": this.date_of_birth,
      "status" : this.status,
      // medicalCenter: this.medicalCenter
    };
    console.log(this.patientRecibido)
    if( this.date_of_birth == "" || this.date_of_birth == null){
      alert('La fecha no cumple el formato establecido')
    }else{
      try {
        this._patientService.edit(
          this.patientRecibido, this.idPatient
        ).subscribe(
          res => {
            console.log('Respuesta del servidor', res);
            const url = ['/patient'];
            this._router.navigate(url);
          }
        );
      }catch (e){
        console.log('Error', e);
      }
    }

  }

  // patient;
  // mostrarFormulario = false;
  //
  // @Output()
  // informacionValidada: EventEmitter<any> = new EventEmitter<any>()
  //
  // constructor(
  //   private readonly _patientService: PatientService,
  //   private readonly _activatedRoute: ActivatedRoute,
  //   private readonly _router: Router,
  // ) {
  // }
  //
  // identification: string
  // name: string
  // gender: string
  // phone: string
  // email: string
  // address: string
  // occupation: string
  // date_of_birth: string
  // status: boolean
  //
  // // medicalCenter: number
  //
  // ngOnInit(): void {
  //   const obsRuta = this._activatedRoute.params;
  //   obsRuta.subscribe(
  //     (parametros: Params) => { //try
  //       const id = Number(parametros.id);
  //       const obsPatient = this._patientService.getOne(id);
  //       obsPatient
  //         .subscribe(
  //           (patient: any) => {
  //             this.patient = patient;
  //             this.llenarFormularioPatient();
  //           },
  //           (error) => {
  //             console.error('Error', error)
  //           }
  //         )
  //     }
  //   )
  // }
  //
  // editPatient(patient) {
  //   const obsEditarPatient = this._patientService.edit(patient, this.patient.id);
  //   obsEditarPatient.subscribe(
  //     (Object) => {
  //       const url = ['/patient'];
  //       this._router.navigate(url);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   )
  // }
  //
  // llenarFormularioPatient() {
  //   this.mostrarFormulario = true;
  // }




}
