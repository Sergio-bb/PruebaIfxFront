import { SolicitudComponent } from './solicitud/solicitud.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPersonaje } from 'src/core/models/personaje';
import { EstudianteService } from 'src/core/services/estudiante/estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css'],
})
export class EstudianteComponent implements OnInit {
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  dataSource!: MatTableDataSource<IPersonaje>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private estudianteService: EstudianteService,
    public dialog: MatDialog,
    ) {}

  ngOnInit() {
    this.estudianteService.getAll().subscribe((data) => {
      data.forEach((estudiante) => {
        estudiante.age = this.calcularEdad(estudiante.dateOfBirth);
      });
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  calcularEdad(fecha: any) {
    let fechanacimiento = new Date(fecha);
    let fechaActual = new Date(Date.now());
    var age = fechaActual.getFullYear() - fechanacimiento.getFullYear();
    if (
      fechaActual.getMonth() < fechanacimiento.getMonth() ||
      (fechaActual.getMonth() == fechanacimiento.getMonth() &&
        fechaActual.getDate() < fechanacimiento.getDate())
    ) {
      age--;
    }
    return age;
  }
  crearSolicitud(){
    this.dialog.open(SolicitudComponent);
  }
}
