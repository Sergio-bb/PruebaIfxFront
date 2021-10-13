import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPersonaje } from 'src/core/models/personaje';
import { ProfesorService } from 'src/core/services/profesor/profesor.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  titulo = "Profesores"
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  dataSource!: MatTableDataSource<IPersonaje>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private profesorService: ProfesorService) {
  }

  ngOnInit() {
    this.profesorService.getAll().subscribe((data) => { 
      data.forEach(profesor => {
        profesor.age = this.calcularEdad(profesor.dateOfBirth)   
      });   
     this.dataSource = new MatTableDataSource(data)   
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
      let fechaActual = new Date(Date.now())

      var age = (fechaActual.getFullYear() - fechanacimiento.getFullYear());

      if (fechaActual.getMonth() < fechanacimiento.getMonth() ||
        fechaActual.getMonth() == fechanacimiento.getMonth()
        && fechaActual.getDate() < fechanacimiento.getDate()
      ) {
        age--;
      }
      return age;
    }
}


