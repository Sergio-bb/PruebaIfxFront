import { ISolicitud } from './../../models/solicitud';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }
  item : ISolicitud[] = []
  action = false
  
  
    
  getItem(){
    return this.action, this.item;
  }
  sendValues(item : any, action : boolean){
    this.item = item;  
    this.action = action;  
  }  
}
