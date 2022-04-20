// tslint:disable
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeRouteComponent} from './routes/home-route/home-route.component';
import {LoginRouteComponent} from './routes/login-route/login-route.component';
import {MedicalCenterRouteComponent} from "./routes/medical-center-route/medical-center-route.component";
import {DoctorRouteComponent} from "./routes/doctor-route/doctor-route.component";
import {PatientRouteComponent} from "./routes/patient-route/patient-route.component";
import {ConsultationRouteComponent} from "./routes/consultation-route/consultation-route.component";
import {UserRouteComponent} from "./routes/user-route/user-route.component";
import {DoctorViewRouteComponent} from "./routes/doctor-view-route/doctor-view-route.component";
import {DoctorEditRouteComponent} from "./routes/doctor-edit-route/doctor-edit-route.component";
import {DoctorCreateRouteComponent} from "./routes/doctor-create-route/doctor-create-route.component";
import {PatientNewRouteComponent} from "./routes/patient-new-route/patient-new-route.component";
import {PatientEditRouteComponent} from "./routes/patient-edit-route/patient-edit-route.component";
import {PatientViewRouteComponent} from "./routes/patient-view-route/patient-view-route.component";
import {ConsultationViewRouteComponent} from "./routes/consultation-view-route/consultation-view-route.component";
import {ConsultationNewRouteComponent} from "./routes/consultation-new-route/consultation-new-route.component";
import {ConsultationEditRouteComponent} from "./routes/consultation-edit-route/consultation-edit-route.component";
import {TestRouteComponent} from "./routes/test-route/test-route.component";
import {MedicalRecordRouteComponent} from "./routes/medical-record-route/medical-record-route.component";
import {MedicalRecordViewRouteComponent} from "./routes/medical-record-view-route/medical-record-view-route.component";
import {MedicalRecordEditRouteComponent} from "./routes/medical-record-edit-route/medical-record-edit-route.component";
import {MedicalRecordNewRouteComponent} from "./routes/medical-record-new-route/medical-record-new-route.component";
import {IshiharaScreenComponent} from "./components/ishihara-screen/ishihara-screen.component";
import {IshiharaScreenRouteComponent} from "./routes/ishihara-screen-route/ishihara-screen-route.component";
import {IshiharaimageNewRouteComponent} from "./routes/ishiharaimage-new-route/ishiharaimage-new-route.component";
import {IshiharaimageEditRouteComponent} from "./routes/ishiharaimage-edit-route/ishiharaimage-edit-route.component";
import {IshiharaimageViewRouteComponent} from "./routes/ishiharaimage-view-route/ishiharaimage-view-route.component";
import {IshiharaTestRouteComponent} from "./routes/ishihara-test-route/ishihara-test-route.component";
import {FarnsworthTestRouteComponent} from "./routes/farnsworth-test-route/farnsworth-test-route.component";
import {EstaLogueadoGuard} from "./services/guards/esta-logueado.guard";
import {EsAdministradorGuard} from "./services/guards/es-administrador.guard";
import {EsSuperadministradorGuard} from "./services/guards/es-superadministrador.guard";
import {EsPersonalGuard} from "./services/guards/es-personal.guard";
import {UserEditRouteComponent} from "./routes/user-edit-route/user-edit-route.component";
import {UserViewRouteComponent} from "./routes/user-view-route/user-view-route.component";
import {ProfileViewRouteComponent} from "./routes/profile-view-route/profile-view-route.component";
import {ProfileEditRouteComponent} from "./routes/profile-edit-route/profile-edit-route.component";
import {MedicalcenterViewRouteComponent} from "./routes/medicalcenter-view-route/medicalcenter-view-route.component";
import {MedicalcenterEditRouteComponent} from "./routes/medicalcenter-edit-route/medicalcenter-edit-route.component";
import {MedicalcenterCreateRouteComponent} from "./routes/medicalcenter-create-route/medicalcenter-create-route.component";
import {RecordatorioRouteComponent} from "./routes/recordatorio-route/recordatorio-route.component";
import {PasswordResetRouteComponent} from "./routes/password-reset-route/password-reset-route.component";
import {Question1RouteComponent} from "./routes/question1-route/question1-route.component";
import {Question2RouteComponent} from "./routes/question2-route/question2-route.component";
import {Question3RouteComponent} from "./routes/question3-route/question3-route.component";
import {ExisteUsuarioGuard} from "./services/guards/existe-usuario.guard";
import {ResetRouteComponent} from "./routes/reset-route/reset-route.component";
import {ChangePasswordRouteComponent} from "./routes/change-password-route/change-password-route.component";

const routes: Routes = [
  {
    component: LoginRouteComponent,
    path: 'login'
  },
  {
    component: PasswordResetRouteComponent,
    path: 'reset-password'
  },
  {
    component: Question1RouteComponent,
    path: 'reset-password/question1',
    canActivate : [
      ExisteUsuarioGuard
    ]
  },
  {
    component: Question2RouteComponent,
    path: 'reset-password/question2',
    canActivate : [
      ExisteUsuarioGuard
    ]
  },
  {
    component: Question3RouteComponent,
    path: 'reset-password/question3',
    canActivate : [
      ExisteUsuarioGuard
    ]
  },
  {
    component: ResetRouteComponent,
    path: 'reset-password/reset',
    canActivate : [
      ExisteUsuarioGuard
    ]
  },

  {
    component: HomeRouteComponent,
    path: 'home',
    canActivate:[
      EstaLogueadoGuard,
    ]
  },

  //medicalCenter
  {
    component: MedicalCenterRouteComponent,
    path: 'medicalCenter',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,
    ]
  },
  {
    component: MedicalcenterViewRouteComponent,
    path: 'medicalCenter/view/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,
    ]
  },
  {
    component: MedicalcenterEditRouteComponent,
    path: 'medicalCenter/edit/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,
    ]
  },
  {
    component: MedicalcenterCreateRouteComponent,
    path: 'medicalCenter/new',
    canActivate : [
      EstaLogueadoGuard,
      EsSuperadministradorGuard,
    ]
  },



  {
    component: DoctorRouteComponent,
    path: 'doctor',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,
     ]
  },
  {
    path:"doctor/view/:id",
    component:DoctorViewRouteComponent,
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,
    ]
  },
  {
    path:"doctor/edit/:id",
    component:DoctorEditRouteComponent,
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,

    ]
  },
  {
    path:"doctor/new",
    component:DoctorCreateRouteComponent,
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,

    ]
  },

  // pacientes
  {
    component: PatientRouteComponent,
    path: 'patient',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },
  {
    component: PatientNewRouteComponent,
    path: 'patient/new',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },
  {
    component: PatientEditRouteComponent,
    path: 'patient/edit/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },
  {
    component: PatientViewRouteComponent,
    path: 'patient/view/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },

  // consultas
  {
    component: RecordatorioRouteComponent,
    path: 'consultationRecordatorio',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },
  {
    component: ConsultationRouteComponent,
    path: 'consultation',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },
  {
    component: ConsultationViewRouteComponent,
    path: 'consultation/view/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },
  {
    component: ConsultationNewRouteComponent,
    path: 'consultation/new',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },
  {
    component: ConsultationEditRouteComponent,
    path: 'consultation/edit/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },

  // historia clinica
  {
    component: MedicalRecordRouteComponent,
    path: 'medicalRecord/patient/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },
  {
    component: MedicalRecordViewRouteComponent,
    path: 'medicalRecord/view/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },
  {
    component: MedicalRecordEditRouteComponent,
    path: 'medicalRecord/patient/:idPatient/edit/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },
  {
    component: MedicalRecordNewRouteComponent,
    path: 'medicalRecord/patient/:idPatient/new',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },

  // tests
  {
    component: TestRouteComponent,
    path: 'tests/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },

  // ishihara recursos
  {
    component: IshiharaScreenRouteComponent,
    path: 'imagesIshihara',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,

    ]
  },
  // imagenes ishihara
  {
    component: IshiharaimageNewRouteComponent,
    path: 'imagesIshihara/new',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,

    ]
  },
  {
    component: IshiharaimageViewRouteComponent,
    path: 'imagesIshihara/view/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,

    ]
  },
  {
    component: IshiharaimageEditRouteComponent,
    path: 'imagesIshihara/edit/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,

    ]
  },

  // ishihara TEST
  {
    component: IshiharaTestRouteComponent,
    path: 'ishiharaTest/:idMedicalRecord',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },


  // farnsworth TEST
  {
    component: FarnsworthTestRouteComponent,
    path: 'farnsworthTest/:idMedicalRecord',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      // EsAdministradorGuard,
      EsPersonalGuard
    ]
  },

  // USUARIOS
  {
    component: UserRouteComponent,
    path: 'user',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,
    ]
  },
  {
    component: UserEditRouteComponent,
    path: 'user/edit/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,
    ]
  },
  {
    component: UserViewRouteComponent,
    path: 'user/view/:id',
    canActivate : [
      EstaLogueadoGuard,
      // EsSuperadministradorGuard,
      EsAdministradorGuard,
    ]
  },

  // PERFIL
  {
    component: ProfileViewRouteComponent,
    path: 'profile',
    canActivate : [
      EstaLogueadoGuard,
      EsPersonalGuard,
    ]
  },
  {
    component: ProfileEditRouteComponent,
    path: 'profile/edit',
    canActivate : [
      EstaLogueadoGuard,
    ]
  },
  {
    component: ChangePasswordRouteComponent,
    path: 'profile/changepassword',
    canActivate : [
      EstaLogueadoGuard,
    ]
  },



  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
