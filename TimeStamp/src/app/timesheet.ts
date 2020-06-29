import { Time } from "@angular/common";
import { doctor } from "./doctor";

export class location {
  date: Date;
  sector: string;
  doctor: doctor;
  timeIn: Time;
  timeOut: Time;
  hrsCode: String;
  hrsWorked: String;
  constructor(
    date: Date,
    sector: string,
    doctor: doctor,
    timeIn: Time,
    timeOut: Time,
    hrsCode: String,
    hrsWorked: String
  ) {}
}
