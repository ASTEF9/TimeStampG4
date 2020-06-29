import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
	title = 'TimeStamp';
	today = new Date();
	
	constructor(public loginService: LoginService, private router: Router) { }
	
	logout(): void
	{
		this.loginService.loggedIn = false;
		this.loginService.loggedInUser = "";
		this.router.navigate(['/']);
	}
}
