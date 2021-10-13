import { UtilitiesService } from './../../../../core/services/utilities/utilities.service';
import { ISolicitud } from './../../../../core/models/solicitud';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/core/services/alert/alert.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SolicitudComponent>,
    private alert: AlertService,
    @Inject(MAT_DIALOG_DATA) public message: string,
    private utilitiService : UtilitiesService
  ) { }
  @Output() solicitudesActive = new EventEmitter<boolean>();

  solicitudes: ISolicitud[] = [];  
  ngOnInit(): void {
  }

  solicitud = new FormGroup({
    name: new FormControl(''),
    species: new FormControl(''),
    gender: new FormControl(''),
    dateOfBirth: new FormControl(''),
    wizard: new FormControl(''),
    ancestry: new FormControl(''),    
  });
  enviarSolicitud(){  
    
   this.utilitiService.item.push(this.solicitud.value)
    this.dialogRef.close();
    this.alert.showMessage('Genial!', 'Se ha agregado la solicitud.')
  }

}
