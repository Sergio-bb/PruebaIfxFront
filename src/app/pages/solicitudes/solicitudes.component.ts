import { ISolicitud } from './../../../core/models/solicitud';
import { UtilitiesService } from './../../../core/services/utilities/utilities.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'species', 'gender', 'dateOfBirth', 'wizard', 'ancestry'];
  dataSource!: MatTableDataSource<ISolicitud>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private utilitiService : UtilitiesService ) { }
  

  ngOnInit(): void {
   let solicitudes =  this.utilitiService.getItem()
   this.dataSource = new MatTableDataSource(solicitudes);
   this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
