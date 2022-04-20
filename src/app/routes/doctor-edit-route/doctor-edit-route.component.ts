//tslint:disable
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {ActivatedRoute, Params, Route, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MedicalcenterService} from "../../services/medicalcenter.service";

@Component({
  selector: 'app-doctor-edit-route',
  templateUrl: './doctor-edit-route.component.html',
  styleUrls: ['./doctor-edit-route.component.css']
})
export class DoctorEditRouteComponent implements OnInit {

  constructor(
    public readonly _authService:AuthService,
    private readonly _medicalCenterService : MedicalcenterService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _doctorService : DoctorService,
    private readonly _router:Router
  ) { }

  //doctor;
  doctorRecibido;
  idDoctor:number;
  name: string
  identification: string
  phone: string
  position: string
  email: string
  password: string
  rol: string
  status : boolean
  //medicalCenter: number

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        this.idDoctor = id;
        const obsDoctor = this._doctorService.getOne(id);
        obsDoctor
          .subscribe(
            (doctor:any)=>{
              this.doctorRecibido = doctor
              this.name= this.doctorRecibido.name;
              this.identification=this.doctorRecibido.identification;
              this.phone=this.doctorRecibido.phone;
              this.position=this.doctorRecibido.position;
              this.email=this.doctorRecibido.email;
              this.rol = this.doctorRecibido.rol
              this.status = this.doctorRecibido.status;

            console.log("this.doctorRecibido");
            console.log(this.doctorRecibido);
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

  editDoctor(){
    this.doctorRecibido={
      "name": this.name,
      "identification": this.identification,
      "phone": this.phone,
      "position": this.position,
      "email": this.email,
      "rol": this.rol,
      "status" : this.status
    }
    console.log(this.doctorRecibido)
    try {
      this._doctorService.edit(
        this.doctorRecibido, this.idDoctor
      ).subscribe(
        res => {
          console.log('Respuesta del servidor', res);
          const url = ['/doctor'];
          this._router.navigate(url);
        }
      );
    }catch (e){
      console.log('Error', e);
    }

  }


}
