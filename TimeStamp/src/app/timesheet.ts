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
  ) {}
}
