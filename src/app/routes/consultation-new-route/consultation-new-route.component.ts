//tslint:disable
import { Component, OnInit } from '@angular/core';
import {ConsultationService} from "../../services/consultation.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {DoctorService} from "../../services/doctor.service";
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-consultation-new-route',
  templateUrl: './consultation-new-route.component.html',
  styleUrls: ['./consultation-new-route.component.css']
})
export class ConsultationNewRouteComponent implements OnInit {

  date : string
  time : string
  detail : string
  status : string
  doctor : number
  patient : number
  doctorsArray = []
  patientsArray = []
  arrayOfObservables = []
  consulta;

  constructor(
    private readonly _doctorService : DoctorService,
    private readonly _patientService : PatientService,
    public readonly _authService:AuthService,
    private readonly _consultationService : ConsultationService,
    private readonly _router : Router
  ) { }

  ngOnInit(): void {
    this.getAllDoctors();
    this.getAllPatients();
    console.log(this.doctorsArray);
    console.log(this.patientsArray);

  }

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



  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  crearConsulta(){

     this.consulta = {
      "date" : this.date,
      "time" : this.time,
      "detail" : this.detail,
      "status" : this.status,
      "doctor" : this.doctor,
      "patient" : this.patient,
      "idMedicalCenter" : this._authService.idMedicalCenter
    };
    console.log(this.consulta)

    try {
      this._consultationService.create(
        this.consulta
      ).subscribe(
        res => {
          console.log('Respuesta del servidor', res);
          const url1 = ['/consultationRecordatorio'];
          const url2 = ['/consultation'];
          if(this.status == 'Pendiente'){
            this._router.navigate(url1);
          }else{
            this._router.navigate(url2);
          }

          }
      );
    }catch (e){
      console.log('Error', e);
    }


    // const observableCrear=this._consultationService.create(consulta);
    // observableCrear.subscribe(
    //   (Object)=>{
    //     const url = ['/consultation']
    //     this._router.navigate(url);
    //   },
    //   (error)=>{
    //     console.error('Error', error);
    //   }
    // );
  }

}
