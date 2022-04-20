//tslint:disable
import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ImageIshiharaService} from "../../../services/imageIshihara.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {MedicalcenterService} from "../../../services/medicalcenter.service";

@Component({
  selector: 'app-formulario-crear-imagenishihara',
  templateUrl: './formulario-crear-imagenishihara.component.html',
  styleUrls: ['./formulario-crear-imagenishihara.component.css']
})
export class FormularioCrearImagenishiharaComponent implements OnInit {

  medicalCenter:number;
  public previsualizacion: string;
  public archivos: any = [];
  arrayOfMedicalCenters=[];
  arrayOfObservables = [];

  constructor(
    public readonly _authService:AuthService,
    private sanitizer: DomSanitizer,
    private _imageIshiharaService: ImageIshiharaService,
    private readonly _medicalCenterService : MedicalcenterService,
    private readonly _router : Router
  ) {
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }

  reference_color
  real_result
  status

  ngOnInit(): void {
    this.traerTodosMedicalCenter();
  }

  traerTodosMedicalCenter(){
    const observableTraerTodos = this._medicalCenterService.getAll();
    const susccripcion = observableTraerTodos
      .subscribe(
        (data)=>{
          this.arrayOfMedicalCenters = data as any[];
          console.log('CENTROS MEDICOS');
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      );
    this.arrayOfObservables.push(susccripcion);
  }


  capturarFile(event): any {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      // console.log(imagen);
    })
    this.archivos.push(archivoCapturado)
    // console.log(event.target.files);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        })
      };
    } catch (e) {
      return null;
    }
  })

  subirArchivo(): any{
    try{
      const formularioDeDatos =  new FormData();
      formularioDeDatos.append('reference_color', this.reference_color)
      formularioDeDatos.append('real_result', this.real_result)

      if(this._authService.esSuperAdmin == true){
        console.log(String(this.medicalCenter))
        formularioDeDatos.append('idMedicalCenter', String(this.medicalCenter))
      }else{
        console.log(String(this._authService.idMedicalCenter))
        formularioDeDatos.append('idMedicalCenter', String(this._authService.idMedicalCenter))
      }


      this.archivos.forEach(archivo=>{
        // console.log(archivo);
        formularioDeDatos.append('file', archivo)
      });
      this._imageIshiharaService.create(formularioDeDatos)
        .subscribe(res=>{
          console.log('Respuesta del servidor', res);
          if(res === null){
            const url = ['/imagesIshihara'];
            this._router.navigate(url);
          }
        })
    }catch (e){
      console.log('Error', e);
    }
  }

}
