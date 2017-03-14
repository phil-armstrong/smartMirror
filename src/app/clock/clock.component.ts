import {Component} from '@angular/core';
import {AlarmService} from './alarm.service'

@Component({
  selector: 'clock',
  styleUrls: ['./clock.component.css'],
  templateUrl: './clock.component.html',
  providers: [AlarmService]
})
export class ClockComponent {
  protected date;
  protected timeFormat;
  protected dateFormat;

  constructor(private alarmService: AlarmService) { 
    this.timeFormat = "HH:mm:ss";
    this.dateFormat = "EEEE, d MMMM y";
    
    
    setInterval(() => {
       this.date =  new Date();
    }, 1000);
  }
}