//tslint:disable
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {MedicalcenterService} from "../../../services/medicalcenter.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-formulario-crear-paciente',
  templateUrl: './formulario-crear-paciente.component.html',
  styleUrls: ['./formulario-crear-paciente.component.css']
})
export class FormularioCrearPacienteComponent implements OnInit {

  @Input()
  mostrarFormularioInput: boolean;

  @Input()
  identificationInput: string;

  @Input()
  nameInput: string;

  @Input()
  genderInput: string;

  @Input()
  phoneInput: string;

  @Input()
  emailInput: string;

  @Input()
  addressInput: string;

  @Input()
  occupationInput: string;

  @Input()
  date_of_birthInput: string;

  @Input()
  statusInput : boolean;

  @Input()
  medicalCenterInput: number;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    public readonly _authService:AuthService,
    private readonly _patientService : PatientService,
    private readonly _medicalCenterService : MedicalcenterService,
    private readonly _router : Router,
  ) { }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  arrayOfMedicalCenters=[]
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
  editando=false

  ngOnInit(): void {
    this.traerTodosMedicalCenter();
    console.log("no editando");
    if(this.nameInput && this.identificationInput){
      console.log("editando");
      this.editando=true;
      this.identification = this.identificationInput;
      this.name = this.nameInput;
      this.gender = this.genderInput;
      this.phone = this.phoneInput;
      this.email = this.emailInput;
      this.address = this.addressInput;
      this.occupation = this.occupationInput;
      this.date_of_birth = this.date_of_birthInput;
      this.status = this.statusInput;
      this.medicalCenter = this.medicalCenterInput;
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

  createPatient(patient){
    console.log("Creando");
    console.log(patient);
    this.informacionValidada.emit(
      {
        identification: this.identification,
        name: this.name,
        gender: this.gender,
        phone: this.phone,
        email: this.email,
        address: this.address,
        occupation: this.occupation,
        date_of_birth: this.date_of_birth,
        status : true,
        medicalCenter: this._authService.idMedicalCenter
        // medicalCenter: this.medicalCenter
      }
    )
  }

}
