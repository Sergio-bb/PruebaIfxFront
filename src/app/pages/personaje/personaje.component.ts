import { getLocaleDateTimeFormat } from '@angular/common';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPersonaje } from 'src/core/models/personaje';
import { PersonajeService } from 'src/core/services/personaje/personaje.service';

@Component({
  selector: 'app-personaje',
  styleUrls: ['personaje.component.css'],
  templateUrl: 'personaje.component.html',
})
export class personajeComponent implements OnInit {
  titulo = 'Seleccione una casa';
  casa = ['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff'];
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  dataSource!: MatTableDataSource<IPersonaje>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private personajeService: PersonajeService) {}

  ngOnInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  cambioCasa(casa: any) {
    this.personajeService.getAll(casa).subscribe((data) => {
      data.forEach((personaje) => {
        personaje.age = this.calcularEdad(personaje.dateOfBirth);
      });
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.titulo = casa
    });
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
}
