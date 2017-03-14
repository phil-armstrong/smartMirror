import { Injectable } from '@angular/core';

@Injectable()
export class AlarmService {
	private alarmTime;
	private date : Date;

	private timeFormat;
	private dateFormat;

	constructor() { 
		this.timeFormat = "HH:mm:ss";
		this.dateFormat = "EEEE, d MMMM y";
		this.date =  new Date();

		setInterval(() => {
			this.date =  new Date();
		}, 1000);
	}

	setAlarm(alarmTime) : void {}
	getAlarm() : String {
		return this.alarmTime;
	}

	getTime() : Date {
		return this.date;
	}
}