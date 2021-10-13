import { IPersonaje } from './../../models/personaje';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  
  constructor(private http :HttpClient) { }
  getAll(): Observable<IPersonaje[]>{
  let url ='http://hp-api.herokuapp.com/api/characters/students'
  return this.http.get<IPersonaje[]>(url)
  }
}
