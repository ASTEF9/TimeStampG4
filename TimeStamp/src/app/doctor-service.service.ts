import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { User } from "./user";
import { catchError } from "rxjs/operators";
import { doctor } from "./doctor";
@Injectable({
  providedIn: "root",
})
export class DoctorServiceService {
  constructor(private http: HttpClient) {}

  apiUrl = "http://localhost:8080/doctors";

  public createdoctor(doctor) {
    return this.http.post("http://localhost:8080/doctors", doctor, {
      responseType: "text" as "json",
    });
  }

  // public getAlldoctors() {
  //   return this.http.get("http://localhost:8080/doctors");
  // }

  getDoctors(): Observable<any> {
    return this.http
      .get<doctor[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // public getUserByEmail(email) {
  //   return this.http.get("http://localhost:9090//findUser/" + email);
  // }

  // public deleteDoctor(id) {
  //   return this.http.delete("http://localhost:9090/doctors/" + id);
  // }

  addDoctor(doctor) {
    return this.http.post(this.apiUrl, doctor, {
      responseType: "text" as "json",
    });
  }

  public deleteDoctor(id) {
    console.log(id);
    return this.http.delete(this.apiUrl + "/" + id);
  }

  getDoctor(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
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
