//tslint:disable
import {Component, OnInit} from '@angular/core';
import {MedicalrecordService} from "../../services/medicalrecord.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-medical-record-view-route',
  templateUrl: './medical-record-view-route.component.html',
  styleUrls: ['./medical-record-view-route.component.css']
})
export class MedicalRecordViewRouteComponent implements OnInit {

  medicalRecord;

  constructor(
    public readonly _authService: AuthService,
    private readonly _medicalRecordService: MedicalrecordService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
    //descargar el pdf al abrir la pagina esta
    // this.downloadPDF();
  }


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
            },
            (error) => {
              console.error('Error', error)
            }
          )
      }
    )
  }

/*
  public downloadPDF(): void {
    // var doc = new jsPDF();
    //
    // doc.html(document.body, {
    //   callback: function (doc) {
    //     doc.save();
    //   }
    // });

    const doc = new jsPDF();

    doc.text('Fecha:'+this.medicalRecord.date, 20, 20);
    doc.text('Nombre del paciente:'+this.medicalRecord.patient.name, 20, 28);
    doc.text('Identificación:'+this.medicalRecord.patient.identification, 20, 36);
    if (this.medicalRecord.patient.phone != undefined) {
      doc.text('Teléfono:'+this.medicalRecord.patient.phone, 20, 44);
    }
    if (this.medicalRecord.patient.email != undefined) {
      doc.text('Correo:'+this.medicalRecord.patient.email, 20, 52);
    }

    // doc.text('Ocupación:', 10, 210);
    if (this.medicalRecord.patient.occupation != undefined) {
      doc.text('Ocupación:'+this.medicalRecord.patient.occupation, 20, 60);
    }
    // doc.text('Dirección:', 400, 210);
    if (this.medicalRecord.patient.address != undefined) {
      doc.text('Dirección:'+this.medicalRecord.patient.address, 20, 68);
    }

    // doc.text('Fecha de nacimiento:', 20, 255);
    if (this.medicalRecord.patient.date_of_birth != undefined) {
      doc.text('Fecha de nacimiento:'+this.medicalRecord.patient.date_of_birth, 20, 76);
    }
    // doc.text('Edad:', 250, 255);
    if (this.medicalRecord.age.toString() != undefined) {
      doc.text('Edad:'+this.medicalRecord.age.toString(), 20, 84);
    }
    // doc.text('Género:', 400, 255);
    if (this.medicalRecord.patient.gender != undefined) {
      doc.text('Género:'+this.medicalRecord.patient.gender, 20, 92);
    }

    // doc.text('Motivo de la consulta:', 20, 300);
    if (this.medicalRecord.reason != undefined) {
      doc.text('Motivo de la consulta:'+this.medicalRecord.reason, 20, 100);
    }


    doc.text('Rx', 20, 110);

    doc.text('Lensometría:', 20, 108);
    // doc.text('Ojo Izquierdo:', 10, 400);
    if (this.medicalRecord.lensometryLE != undefined) {
      doc.text('Ojo Izquierdo:'+this.medicalRecord.lensometryLE.toString(), 20, 116);
    }
    // doc.text('Ojo Derecho:', 10, 420);
    if (this.medicalRecord.lensometryRE != undefined) {
      doc.text('Ojo Derecho:'+this.medicalRecord.lensometryRE.toString(), 20, 124);
    }

    doc.text('Agudeza Visual (AV):', 20, 132);
    // doc.text('Ojo Izquierdo:', 400, 385);
    if (this.medicalRecord.avLE != undefined) {
      doc.text('Ojo Izquierdo:'+this.medicalRecord.avLE.toString(), 20, 140);
    }
    // doc.text('Ojo Derecho:', 400, 420);
    if (this.medicalRecord.avRE != undefined) {
      doc.text('Ojo Derecho:'+this.medicalRecord.avRE.toString(), 20, 148);
    }


    doc.text('Rx Final', 20, 150);

    doc.text('Esfera:', 20, 158);
    if (this.medicalRecord.sphereLE != undefined) {
      doc.text('Ojo Izquierdo:'+this.medicalRecord.sphereLE.toString(), 20, 166);
    }
    if (this.medicalRecord.sphereRE != undefined) {
      doc.text('Ojo Derecho:'+this.medicalRecord.sphereRE.toString(), 20, 174);
    }

    doc.text('Cilindro:', 20, 182);
    if (this.medicalRecord.cylinderLE != undefined) {
      doc.text('Ojo Izquierdo:'+this.medicalRecord.cylinderLE.toString(), 20, 190);
    }
    if (this.medicalRecord.cylinderRE != undefined) {
      doc.text('Ojo Derecho:'+this.medicalRecord.cylinderRE.toString(), 20, 198);
    }

    doc.text('Eje:', 20, 216);
    if (this.medicalRecord.axisLE != undefined) {
      doc.text('Ojo Izquierdo:'+this.medicalRecord.axisLE.toString(), 20, 234);
    }
    if (this.medicalRecord.axisRE != undefined) {
      doc.text('Ojo Derecho:'+this.medicalRecord.axisRE.toString(), 20, 242);
    }

    doc.text('Prisma:', 20, 250);
    if (this.medicalRecord.prismLE != undefined) {
      doc.text('Ojo Izquierdo:'+this.medicalRecord.prismLE.toString(), 20, 258);
    }
    if (this.medicalRecord.prismRE != undefined) {
      doc.text('Ojo Derecho:'+this.medicalRecord.prismRE.toString(), 20, 266);
    }

    doc.text('AV:', 20, 274);
    if (this.medicalRecord.avLEFinal != undefined) {
      doc.text('Ojo Izquierdo:'+this.medicalRecord.avLEFinal.toString(), 20, 282);
    }
    if (this.medicalRecord.avREFinal != undefined) {
      doc.text('Ojo Derecho:'+this.medicalRecord.avREFinal.toString(), 20, 290);
    }

    if (this.medicalRecord.add != undefined) {
      doc.text('ADD:'+this.medicalRecord.add.toString(), 20, 298);
    }
    if (this.medicalRecord.dp != undefined) {
      doc.text('DP:'+this.medicalRecord.dp.toString(), 20, 326);
    }
    if (this.medicalRecord.alt != undefined) {
      doc.text('ALT:'+this.medicalRecord.alt.toString(), 20, 334);
    }

    if (this.medicalRecord.remark != undefined) {
      doc.text('Observación:'+this.medicalRecord.remark, 10, 342);
    }

    if (this.medicalRecord.indications != undefined) {
      doc.text('Indicación:'+this.medicalRecord.indications, 10, 362);
    }

    if (this.medicalRecord.lunaTipo != undefined) {
      doc.text('Tipo de luna:'+this.medicalRecord.lunaTipo, 10, 382);
    }

    doc.save(this.medicalRecord.patient.identification+'.pdf');

  }
*/

  navigateTo(navigate: String) {
    const url = [navigate]
    this._router.navigate(url);
  }

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

  scale = this.arrayBox1.concat(this.arrayBox2.concat(this.arrayBox3.concat(this.arrayBox4)))


}
