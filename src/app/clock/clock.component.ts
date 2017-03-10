import {Component} from '@angular/core';

@Component({
  selector: 'clock',
  styleUrls: ['./clock.component.css'],
  templateUrl: './clock.component.html'
})
export class ClockComponent {
  private date;
  private format;

  constructor() { 
    this.format = "HH:mm:ss";
    this.date =  new Date(); 
    
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }
}