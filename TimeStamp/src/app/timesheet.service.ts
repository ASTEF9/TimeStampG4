import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { timesheet } from "./timesheet";

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

  getTimesheets(): Observable<any> {
    return this.http
      .get<timesheet[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  addLocation(timesheet) {
    return this.http.post(this.apiUrl, timesheet, {
      responseType: "text" as "json",
    });
  }

  getTimesheet(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public deleteTimesheet(id) {
    console.log(id);
    return this.http.delete(this.apiUrl + "/" + id);
  }

  public handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = "Server side error";
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side Error: ", errorResponse.error.message);
    } else {
      console.error("Server Side error", errorResponse);
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
