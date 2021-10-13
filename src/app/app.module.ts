import { personajeComponent } from './pages/personaje/personaje.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../assets/material.module';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { SolicitudComponent } from './pages/estudiante/solicitud/solicitud.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    personajeComponent,
    EstudianteComponent,
    SolicitudComponent,
    SolicitudesComponent

  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,   
    FormsModule,
    ReactiveFormsModule,    
    MaterialModule,
    CommonModule,    
    ToastrModule.forRoot({
      timeOut: 50000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),    
    ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
