import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { User } from "./user";
import { catchError } from "rxjs/operators";
import { doctor } from "./doctor";
import { location } from "./location";

@Injectable({
  providedIn: "root",
})
export class LocationsService {
  constructor(private http: HttpClient) {}

  apiUrl = "http://localhost:8080/locations";

  public createlocation(location) {
    return this.http.post("http://localhost:8080/locations", location, {
      responseType: "text" as "json",
    });
  }

  getLocations(): Observable<any> {
    return this.http
      .get<location[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  addLocation(location) {
    return this.http.post(this.apiUrl, location, {
      responseType: "text" as "json",
    });
  }

  getLocation(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public deleteLocation(id) {
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
