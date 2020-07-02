import { Time } from "@angular/common";
import { doctor } from "./doctor";

export class timesheet {
  date: string;
  sector: string;
  timeIn: string;
  timeOut: string;
  hrsCode: string;
  hrsWorked: string;
  constructor(
    date: string,
    sector: string,
    timeIn: string,
    timeOut: string,
    hrsCode: string,
    hrsWorked: string
  ) 
  {
	this.date = date;
	this.sector = sector;
	this.timeIn = timeIn;
	this.timeOut = timeOut;
	this.hrsCode = hrsCode;
	this.hrsWorked = hrsWorked;
  }
}
