//tslint:disable
import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ImageIshiharaService} from "../../../services/imageIshihara.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-formulario-editar-ishihara',
  templateUrl: './formulario-editar-ishihara.component.html',
  styleUrls: ['./formulario-editar-ishihara.component.css']
})
export class FormularioEditarIshiharaComponent implements OnInit {

  imageIshihara;

  constructor(
    public readonly _authService:AuthService,
    private sanitizer: DomSanitizer,
    private _imageIshiharaService: ImageIshiharaService,
    private readonly _router : Router,
    private readonly _activatedRoute:ActivatedRoute
  ) {
  }

  reference_color
  real_result
  status

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros:Params)=>{
        const id = Number(parametros.id);
        const obsImageIshihara = this._imageIshiharaService.getOne(id);
        obsImageIshihara
          .subscribe(
            (imageIshihara:any)=>{
              this.imageIshihara = imageIshihara;
              this.real_result = imageIshihara.real_result;
              this.reference_color = imageIshihara.reference_color;
              this.status = imageIshihara.status
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
  editarDatosImagen(): any{
    try{
      const formularioDeDatos =  new FormData();
      formularioDeDatos.append('reference_color', this.reference_color)
      formularioDeDatos.append('real_result', this.real_result)
      formularioDeDatos.append('status', this.status)
      this._imageIshiharaService.edit( formularioDeDatos, this.imageIshihara.id)
        .subscribe(res=>{
          console.log('Respuesta del servidor', res);
          if(res['filename'] !== null){
            const url = ['/imagesIshihara'];
            this._router.navigate(url);
          }
        })
    }catch (e){
      console.log('Error', e);
    }
  }

}
