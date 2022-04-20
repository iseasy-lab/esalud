//tslint:disable
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MedicalrecordService} from "../../services/medicalrecord.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-medical-record-edit-route',
  templateUrl: './medical-record-edit-route.component.html',
  styleUrls: ['./medical-record-edit-route.component.css']
})
export class MedicalRecordEditRouteComponent implements OnInit {
  medicalRecord;
  mostrarFormulario = false;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private readonly _medicalRecordService: MedicalrecordService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  reason: string
  date: string
  age: string
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
        const id = Number(parametros.id);
        const obsPatient = this._medicalRecordService.getOne(id);
        obsPatient
          .subscribe(
            (medicalRecord: any) => {
              this.medicalRecord = medicalRecord;
              this.llenarFormularioMedicalRecord();
            },
            (error) => {
              console.error('Error', error)
            }
          )
      }
    )
  }

  editMedicalRecord(medicalRecord) {
    const obsEditarPatient = this._medicalRecordService.edit(medicalRecord, this.medicalRecord.id);
    obsEditarPatient.subscribe(
      (Object) => {
        const url = ['/medicalRecord/patient/'+this.medicalRecord.patient.id];
        this._router.navigate(url);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  llenarFormularioMedicalRecord() {
    this.mostrarFormulario = true;
  }

}
