import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

	public loggedIn = false;
	public loggedInUser = "";
	id: number;
	errorMsg;
//	users: User[];

	constructor(private http: HttpClient) 
	{ 
		this.loggedIn = false;
//		this.loggedIn = true;
		this.loggedInUser = "";
		this.getValidUsers().subscribe(
			(data) => this.id = data[data.length - 1].id,
			(error) => this.errorMsg = error,//error/failure
			() => console.log('the sequence completed!')//complete
		)	
/*		
		this.getValidUsers().subscribe(
			(data) => this.users = data,
			(error) => this.errorMsg = error,//error/failure
			() => console.log('the sequence completed!')//complete
		)
*/
	}
  
	getValidUsers(): Observable<User[]>
	{
//		return this.http.get<User[]>("http://localhost:3000/user")
		return this.http.get<User[]>("http://localhost:8080/users")
		.pipe(catchError(this.errorHandler));
	}
	
	register(user: User): Observable<User[]>
	{
		user.id = ++this.id;
//		return this.http.post<User[]>("http://localhost:3000/user", user)
		return this.http.post<User[]>("http://localhost:8080/users", user)
		.pipe(catchError(this.errorHandlerRegistration));	
	}
	
	deleteUser(id: number): Observable<User[]>
	{
//		return this.http.delete<User []>("http://localhost:3000/user/" + id)
		return this.http.delete<User[]>("http://localhost:8080/users/" + id)
		.pipe(catchError(this.errorHandler));
	}
/*	
	editUser(id: number, user: User): Observable<User[]>
	{
		return this.http.put<User []>("http://localhost:3000/user/" + id, user)
		.pipe(catchError(this.errorHandler));
	}
*/	
	/*
	//After deletion of a user, this function is called to reset the ids of all other users 
	resetIds(id: number): void
	{
		if(id >= this.id)
			return;
	/*
		while(id < this.id)
		{
			var user = this.users[id - 1];
			user.id--;
			//Update the user
			this.editUser(++id, user).subscribe();
		}
		*//*
		console.log("DS");
		var user = new User("A", "V", "C", "D", "E");
		user.id = 28;
		this.editUser(3, user).subscribe();
	}
	*/
	
	errorHandler(error: HttpErrorResponse)
	{
		console.log(error);
		return throwError(error.message || "Server Error");
	}
	
	errorHandlerRegistration(error: HttpErrorResponse)
	{
		this.id--;
		console.log(error);
		return throwError(error.message || "Server Error");
	}
}
