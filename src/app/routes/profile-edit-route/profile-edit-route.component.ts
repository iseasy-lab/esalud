//tslint:disable
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {DoctorService} from "../../services/doctor.service";

@Component({
  selector: 'app-profile-edit-route',
  templateUrl: './profile-edit-route.component.html',
  styleUrls: ['./profile-edit-route.component.css']
})
export class ProfileEditRouteComponent implements OnInit {
  user;
  userEditado;
  name:string;
  email:string;
  phone:string;
  password:string;
  passwordConfirmacion:string;
  question1:string;
  question2:string;
  question3:string;
  answer1:string;
  answer2:string;
  answer3:string;



  constructor(
    public readonly _authService:AuthService,
    private readonly _doctorService:DoctorService,
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _router : Router,
  ) { }

  ngOnInit(): void {
    const obsPerfil = this._doctorService.getOne(this._authService.idUsuario);
    obsPerfil
      .subscribe(
        (user:any)=>{
          this.user = user;
          this.name= user.name;
          this.email= user.email;
          this.phone= user.phone;
          this.password= user.password;
          this.passwordConfirmacion = user.password;
          this.question1 = user.question1;
          this.question2 = user.question2;
          this.question3 = user.question3;
          this.answer1 = user.answer1;
          this.answer2 = user.answer2;
          this.answer3 = user.answer3;
        },
        (error)=>{
          console.error('Error', error)
        }
      )
  }

  navigateTo(navigate:String){
    const url = [navigate]
    this._router.navigate(url);
  }



  editarUsuario() {
    if (this.password == this.passwordConfirmacion) {
      console.log("son iguales")
      console.log(this.password)
      // if(this.password.includes('a'||'b'||'c'||'d'||'e'||'f'||'g'||'h'||'i'||'j'||'k'||'l'||'m'||'n'||'o'||
      //     'p'||'q'||'r'||'s'||'t'||'u'||'v'||'w'||'x'||'y'||'z'||'ñ') &&
      //   this.password.includes('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'I'||'J'||'K'||'L'||'M'||'N'||'O'||
      //     'P'||'Q'||'R'||'S'||'T'||'U'||'V'||'W'||'X'||'Y'||'Z'||'Ñ') &&
      //   this.password.includes('0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9')
      // )

      // if(this.password.includes('a'||'b'||'c')) {
      // console.log('jajaja')
      // }else{
      //   console.log('jeje')
      // }
      //
      // if(this.password.includes('a'||'b'||'c'||'d'||'e'||'f'||'g'||'h'||'i'||'j'||'k'||'l'||'m'||'n'||'o'||
      //     'p'||'q'||'r'||'s'||'t'||'u'||'v'||'w'||'x'||'y'||'z'||'ñ')
      //      )
      // {
      //   console.log("valido minus")
      //   console.log(this.password)
      //
      //   // if(this.password.includes('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'I'||'J'||'K'||'L'||'M'||'N'||'O'||
      //   //   'P'||'Q'||'R'||'S'||'T'||'U'||'V'||'W'||'X'||'Y'||'Z'||'Ñ')){
      //
      //   if(this.password.includes('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'I'||'J'||'K'||'L'||'M'||'N'||'O'||
      //       'P'||'Q'||'R'||'S'||'T'||'U'||'V'||'W'||'X'||'Y'||'Z'||'Ñ')) {
      //     console.log("valido mayus")
      //     console.log(this.password)
      //     //||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'
      //     if(this.password.includes('0')){
      //       console.log("valido num")
      //       console.log(this.password)



          this.userEditado = {
            "name": this.name,
            "email": this.email,
            "phone": this.phone,
            "password": this.password,
            "question1": this.question1,
            "question2": this.question2,
            "question3": this.question3,
            "answer1": this.answer1,
            "answer2": this.answer2,
            "answer3": this.answer3,

          }
          console.log(this.userEditado)
          try {
            this._doctorService.edit(
              this.userEditado, this._authService.idUsuario
            ).subscribe(
              res => {
                console.log('Respuesta del servidor', res);
                const url = ['/profile'];
                this._router.navigate(url);
              }
            );
          } catch (e) {
            console.log('Error', e);
          }

        // }
        // }

      // }else{
      //   console.log("error")
      //   console.log(this.password)
      //   alert('La contraseña NO ES SEGURA, recomendamos que tenga mínimo 8 caracteres e incluir letras minúsculas, mayúsculas y números')
      //   this.password = ''
      //   this.passwordConfirmacion=''
      // }
    }else{
      alert("Las contraseñas no coinciden");
    }
  }

}
