import { UtilitiesService } from './../core/services/utilities/utilities.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reservation-system';

  constructor(private utilitiService : UtilitiesService){

  }
 
  
}
