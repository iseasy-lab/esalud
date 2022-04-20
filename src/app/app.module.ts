//tslint:disable
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { LoginRouteComponent } from './routes/login-route/login-route.component';
import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { MedicalCenterRouteComponent } from './routes/medical-center-route/medical-center-route.component';
import { DoctorRouteComponent } from './routes/doctor-route/doctor-route.component';
import { PatientRouteComponent } from './routes/patient-route/patient-route.component';
import { ConsultationRouteComponent } from './routes/consultation-route/consultation-route.component';
import { UserRouteComponent } from './routes/user-route/user-route.component';
import { MedicalCenterComponent } from './components/medical-center/medical-center.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { DoctorsScreenComponent } from './components/doctors-screen/doctors-screen.component';
import { PatientsScreenComponent } from './components/patients-screen/patients-screen.component';
import { UserScreenComponent } from './components/user-screen/user-screen.component';
import {HttpClientModule} from '@angular/common/http';
import {DoctorService} from './services/doctor.service';
import {MedicalcenterService} from "./services/medicalcenter.service";
import {PatientService} from "./services/patient.service";
import {ConsultationService} from "./services/consultation.service";
import {UserService} from "./services/user.service";
import { DoctorCreateRouteComponent } from './routes/doctor-create-route/doctor-create-route.component';
import { DoctorViewRouteComponent } from './routes/doctor-view-route/doctor-view-route.component';
import { DoctorEditRouteComponent } from './routes/doctor-edit-route/doctor-edit-route.component';
import {FormsModule} from "@angular/forms";
import { FormularioCrearDoctorComponent } from './components/formularios/formulario-crear-doctor/formulario-crear-doctor.component';
import { FormularioCrearPacienteComponent } from './components/formularios/formulario-crear-paciente/formulario-crear-paciente.component';
import { PatientNewRouteComponent } from './routes/patient-new-route/patient-new-route.component';
import { PatientEditRouteComponent } from './routes/patient-edit-route/patient-edit-route.component';
import { PatientViewRouteComponent } from './routes/patient-view-route/patient-view-route.component';
import { ConsultationViewRouteComponent } from './routes/consultation-view-route/consultation-view-route.component';
import { ConsultationEditRouteComponent } from './routes/consultation-edit-route/consultation-edit-route.component';
import { ConsultationNewRouteComponent } from './routes/consultation-new-route/consultation-new-route.component';
import { FormularioCrearConsultaComponent } from './components/formularios/formulario-crear-consulta/formulario-crear-consulta.component';
import { TestRouteComponent } from './routes/test-route/test-route.component';
import { TestsScreenComponent } from './components/tests-screen/tests-screen.component';
import { MedicalRecordRouteComponent } from './routes/medical-record-route/medical-record-route.component';
import { MedicalRecordScreenComponent } from './components/medical-record-screen/medical-record-screen.component';
import {MedicalrecordService} from "./services/medicalrecord.service";
import { FormularioCrearMedicalrecordComponent } from './components/formularios/formulario-crear-medicalrecord/formulario-crear-medicalrecord.component';
import { MedicalRecordNewRouteComponent } from './routes/medical-record-new-route/medical-record-new-route.component';
import { MedicalRecordEditRouteComponent } from './routes/medical-record-edit-route/medical-record-edit-route.component';
import { MedicalRecordViewRouteComponent } from './routes/medical-record-view-route/medical-record-view-route.component';
import { IshiharaScreenComponent } from './components/ishihara-screen/ishihara-screen.component';
import { IshiharaScreenRouteComponent } from './routes/ishihara-screen-route/ishihara-screen-route.component';
import {ImageIshiharaService} from "./services/imageIshihara.service";
import { IshiharaimageViewRouteComponent } from './routes/ishiharaimage-view-route/ishiharaimage-view-route.component';
import { IshiharaimageNewRouteComponent } from './routes/ishiharaimage-new-route/ishiharaimage-new-route.component';
import { IshiharaimageEditRouteComponent } from './routes/ishiharaimage-edit-route/ishiharaimage-edit-route.component';
import { FormularioCrearImagenishiharaComponent } from './components/formularios/formulario-crear-imagenishihara/formulario-crear-imagenishihara.component';
import { FormularioEditarIshiharaComponent } from './components/formularios/formulario-editar-ishihara/formulario-editar-ishihara.component';
import { IshiharaTestRouteComponent } from './routes/ishihara-test-route/ishihara-test-route.component';
import { IshiharaTestComponent } from './components/ishihara-test/ishihara-test.component';
import {IshiharatestService} from "./services/ishiharatest.service";
import {ImageResultIshiharaService} from "./services/imageResultIshihara.service";
import { FarnsworthTestRouteComponent } from './routes/farnsworth-test-route/farnsworth-test-route.component';
import { FarnsworthTestComponent } from './components/farnsworth-test/farnsworth-test.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {FarnsworthTestService} from "./services/farnsworth-test.service";
import {AuthService} from "./services/auth.service";
import {EstaLogueadoGuard} from "./services/guards/esta-logueado.guard";
import {EsAdministradorGuard} from "./services/guards/es-administrador.guard";
import {EsSuperadministradorGuard} from "./services/guards/es-superadministrador.guard";
import {EsPersonalGuard} from "./services/guards/es-personal.guard";
import { UserViewRouteComponent } from './routes/user-view-route/user-view-route.component';
import { UserEditRouteComponent } from './routes/user-edit-route/user-edit-route.component';
import { ProfileViewRouteComponent } from './routes/profile-view-route/profile-view-route.component';
import { ProfileEditRouteComponent } from './routes/profile-edit-route/profile-edit-route.component';
import { MedicalcenterCreateRouteComponent } from './routes/medicalcenter-create-route/medicalcenter-create-route.component';
import { MedicalcenterEditRouteComponent } from './routes/medicalcenter-edit-route/medicalcenter-edit-route.component';
import { MedicalcenterViewRouteComponent } from './routes/medicalcenter-view-route/medicalcenter-view-route.component';
import { RecordatorioRouteComponent } from './routes/recordatorio-route/recordatorio-route.component';
import { PasswordResetRouteComponent } from './routes/password-reset-route/password-reset-route.component';
import { Question1RouteComponent } from './routes/question1-route/question1-route.component';
import { Question2RouteComponent } from './routes/question2-route/question2-route.component';
import { Question3RouteComponent } from './routes/question3-route/question3-route.component';
import { ResetRouteComponent } from './routes/reset-route/reset-route.component';
import {ExisteUsuarioGuard} from "./services/guards/existe-usuario.guard";
import { ChangePasswordRouteComponent } from './routes/change-password-route/change-password-route.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    LoginRouteComponent,
    HomeRouteComponent,
    LoginScreenComponent,
    MedicalCenterRouteComponent,
    DoctorRouteComponent,
    PatientRouteComponent,
    ConsultationRouteComponent,
    UserRouteComponent,
    MedicalCenterComponent,
    ConsultationComponent,
    DoctorsScreenComponent,
    PatientsScreenComponent,
    UserScreenComponent,
    DoctorCreateRouteComponent,
    DoctorViewRouteComponent,
    DoctorEditRouteComponent,
    FormularioCrearDoctorComponent,
    FormularioCrearPacienteComponent,
    PatientNewRouteComponent,
    PatientEditRouteComponent,
    PatientViewRouteComponent,
    ConsultationViewRouteComponent,
    ConsultationEditRouteComponent,
    ConsultationNewRouteComponent,
    FormularioCrearConsultaComponent,
    TestRouteComponent,
    TestsScreenComponent,
    MedicalRecordRouteComponent,
    MedicalRecordScreenComponent,
    FormularioCrearMedicalrecordComponent,
    MedicalRecordNewRouteComponent,
    MedicalRecordEditRouteComponent,
    MedicalRecordViewRouteComponent,
    IshiharaScreenComponent,
    IshiharaScreenRouteComponent,
    IshiharaimageViewRouteComponent,
    IshiharaimageNewRouteComponent,
    IshiharaimageEditRouteComponent,
    FormularioCrearImagenishiharaComponent,
    FormularioEditarIshiharaComponent,
    IshiharaTestRouteComponent,
    IshiharaTestComponent,
    FarnsworthTestRouteComponent,
    FarnsworthTestComponent,
    UserViewRouteComponent,
    UserEditRouteComponent,
    ProfileViewRouteComponent,
    ProfileEditRouteComponent,
    MedicalcenterCreateRouteComponent,
    MedicalcenterEditRouteComponent,
    MedicalcenterViewRouteComponent,
    RecordatorioRouteComponent,
    PasswordResetRouteComponent,
    Question1RouteComponent,
    Question2RouteComponent,
    Question3RouteComponent,
    ResetRouteComponent,
    ChangePasswordRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,

  ],
  providers: [
    DoctorService,
    MedicalcenterService,
    PatientService,
    ConsultationService,
    UserService,
    MedicalrecordService,
    ImageIshiharaService,
    IshiharatestService,
    ImageResultIshiharaService,
    FarnsworthTestService,
    AuthService,
    EstaLogueadoGuard,
    ExisteUsuarioGuard,
    EsAdministradorGuard,
    EsSuperadministradorGuard,
    EsPersonalGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
