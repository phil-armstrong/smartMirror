import {Component} from '@angular/core';
import { ClockComponent } from './clock.component';
import {AlarmService} from './alarm.service'

@Component({
  selector: 'adv-clock',
  styleUrls: ['./clock.component.css'],
  templateUrl: './clock.component.html',
  providers: [AlarmService]
})
export class AdvancedClockComponent extends ClockComponent {
  constructor(alarmService: AlarmService) {
    super(alarmService);
    this.timeFormat = "HH:mm:ss";
    this.dateFormat = "EEEE, d MM yy";
  }
}