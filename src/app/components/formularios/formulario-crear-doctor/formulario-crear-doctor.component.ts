//tslint:disable
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MedicalcenterService} from "../../../services/medicalcenter.service";
import {DoctorService} from "../../../services/doctor.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-formulario-crear-doctor',
  templateUrl: './formulario-crear-doctor.component.html',
  styleUrls: ['./formulario-crear-doctor.component.css']
})
export class FormularioCrearDoctorComponent implements OnInit {

  @Input()
  mostrarFormularioInput: boolean;

  @Input()
  nameInput: string;

  @Input()
  identificationInput: string;

  @Input()
  phoneInput: string;

  @Input()
  positionInput: string;

  @Input()
  emailInput: string;

  // @Input()
  // passwordInput: string;

  @Input()
  rolInput: string;

  @Input()
  statusInput: boolean;

  // @Input()
  // medicalCenter: number;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    public readonly _authService:AuthService,
    private readonly _medicalCenterService : MedicalcenterService,
    private readonly _doctorService : DoctorService,
    private readonly _router:Router
  ) { }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  arrayOfMedicalCenters=[]
  arrayOfObservables = [];

  name: string
  identification: string
  phone: string
  position: string
  email: string
  password: string
  rol: string
  status : boolean
  medicalCenter: number

  ngOnInit(): void {
    this.traerTodosMedicalCenter();
    console.log("no editando");
    if(this.nameInput && this.identificationInput && this.emailInput) {
      console.log("editando");
      this.name = this.nameInput;
      this.identification = this.identificationInput;
      this.phone = this.phoneInput;
      this.position = this.positionInput;
      this.email = this.emailInput;
      this.rol = this.rolInput;
      this.status = this.statusInput;
    }
  }

  traerTodosMedicalCenter(){
    const observableTraerTodos = this._medicalCenterService.getAll();
    const susccripcion = observableTraerTodos
      .subscribe(
        (data)=>{
          this.arrayOfMedicalCenters = data as any[];
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      );
    this.arrayOfObservables.push(susccripcion);
  }



  createDoctor(doctor){

    console.log("Creando");

    var passwordEncrypted = crypto.SHA512(this.password).toString();

    this.informacionValidada.emit(
      {
        name: this.name,
        identification: this.identification,
        phone: this.phone,
        position: this.position,
        email: this.email,
        password: passwordEncrypted,
        rol: this.rol,
        status : this.status,
        medicalCenter: this.medicalCenter
      }
    )
  }


}




// import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import {MedicalcenterService} from "../../../services/medicalcenter.service";
// import {DoctorService} from "../../../services/doctor.service";
// import {Router} from "@angular/router";
//
// @Component({
//   selector: 'app-formulario-crear-doctor',
//   templateUrl: './formulario-crear-doctor.component.html',
//   styleUrls: ['./formulario-crear-doctor.component.css']
// })
// export class FormularioCrearDoctorComponent implements OnInit {
//
//   @Output()
//   informacionValidada: EventEmitter<any> = new EventEmitter<any>()
//
//   constructor(
//     private readonly _medicalCenterService : MedicalcenterService,
//     private readonly _doctorService : DoctorService,
//     private readonly _router:Router
//   ) { }
//
//   arrayOfMedicalCenters=[]
//   arrayOfObservables = [];
//
//   name: string
//   identification: string
//   phone: string
//   position: string
//   email: string
//   password: string
//   rol: string
//   status : boolean
//   medicalCenter: number
//
//   ngOnInit(): void {
//     this.traerTodosMedicalCenter();
//   }
//
//   traerTodosMedicalCenter(){
//     const observableTraerTodos = this._medicalCenterService.getAll();
//     const susccripcion = observableTraerTodos
//       .subscribe(
//         (data)=>{
//           this.arrayOfMedicalCenters = data as any[];
//           console.log(data);
//         },
//         (error)=>{
//           console.log(error);
//         }
//       );
//     this.arrayOfObservables.push(susccripcion);
//   }
//
//
//   createDoctor(doctor){
//     console.log("Creando");
//     this.informacionValidada.emit(
//       {
//         name: this.name,
//         identification: this.identification,
//         phone: this.phone,
//         position: this.position,
//         email: this.email,
//         password: this.password,
//         rol: this.rol,
//         status : this.status,
//         medicalCenter: this.medicalCenter
//       }
//     )
//   }
//   // createDoctor(doctor){
//   //   console.log(doctor);
//   //   const observableCrear = this._doctorService.create(doctor);
//   //   observableCrear.subscribe(
//   //     (Object)=>{
//   //       const url = ['/doctor'];
//   //       this._router.navigate(url);
//   //     },
//   //     (error)=>{
//   //       console.error('Error', error);
//   //     }
//   //
//   //   )
//   // }
//
// }
