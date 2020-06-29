import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TimesheetService {
  constructor(private http: HttpClient) {}

  apiUrl = "http://localhost:8080/timesheets";

  public createTimesheet(timesheet) {
    return this.http.post("http://localhost:8080/timesheets", timesheet, {
      responseType: "text" as "json",
    });
  }
}
