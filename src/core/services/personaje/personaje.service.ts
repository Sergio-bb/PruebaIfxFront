import { IPersonaje } from '../../models/personaje';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  urlRoot = 'http://hp-api.herokuapp.com/api/characters/house/'
  constructor(private http :HttpClient) { }
  getAll(casa : string): Observable<IPersonaje[]>{
  let url = this.urlRoot + casa;
  console.log(url)
  return this.http.get<IPersonaje[]>(url)
  }
}
