import { IPersonaje } from 'src/core/models/personaje';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http :HttpClient) { }
  getAll(): Observable<IPersonaje[]>{
  let url ='http://hp-api.herokuapp.com/api/characters/staff'
  return this.http.get<IPersonaje[]>(url)
  }
}
