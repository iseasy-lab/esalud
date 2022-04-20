//tslint:disable
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ConsultationService} from "../../services/consultation.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-consultation-edit-route',
  templateUrl: './consultation-edit-route.component.html',
  styleUrls: ['./consultation-edit-route.component.css']
})
export class ConsultationEditRouteComponent implements OnInit {
  consultation;
  mostrarFormulario = false;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private readonly _consultationService: ConsultationService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
  }

  date: string
  time: string
  detail: string
  status: string
  doctor: number
  patient: number

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => {
        const id = Number(parametros.id);
        const obsConsultation = this._consultationService.getOne(id);
        obsConsultation.subscribe(
          (consultation: any) => {
            this.consultation = consultation;
            this.llenarFormularioConsultation();
          },
          (error) => {
            console.error('Error', error)
          }
        )
      }
    )
  }

  editConsultation(consultation){
    console.log('Lo que mando');
    console.log(consultation);
    const obsEditarConsultation = this._consultationService.edit(consultation, this.consultation.id);
    obsEditarConsultation.subscribe(
      (Object)=>{
        const url = ['/consultation'];
        this._router.navigate(url);
      },
      (error)=>{
        console.error('Error', error);
      }
    )
  }

  llenarFormularioConsultation() {
    this.mostrarFormulario = true;
  }

}
