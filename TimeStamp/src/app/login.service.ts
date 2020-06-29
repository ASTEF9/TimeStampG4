import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  public loggedIn = false;
  id: number;
  errorMsg;

  constructor(private http: HttpClient) {
    this.loggedIn = false;
    this.getValidUsers().subscribe(
      (data) => (this.id = data.length),
      (error) => (this.errorMsg = error), //error/failure
      () => console.log("the sequence completed!") //complete
    );
  }

  getValidUsers(): Observable<User[]> {
    return this.http
      .get<User[]>("http://localhost:3000/user")
      .pipe(catchError(this.errorHandler));
  }

  register(user: User): Observable<User[]> {
    user.id = ++this.id;
    return this.http
      .post<User[]>("http://localhost:3000/user", user)
      .pipe(catchError(this.errorHandlerRegistration));
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.message || "Server Error");
  }

  errorHandlerRegistration(error: HttpErrorResponse) {
    this.id--;
    console.log(error);
    return throwError(error.message || "Server Error");
  }
}
