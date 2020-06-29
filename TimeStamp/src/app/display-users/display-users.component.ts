import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

	users: User[];
	errorMsg;

	constructor(public loginService: LoginService, private router: Router) { }

	ngOnInit(): void 
	{
		this.errorMsg = "";
		this.loginService.getValidUsers().subscribe
		(
			(data) => this.users = data,
			(error) => this.errorMsg = error,//error/failure
			() => console.log('the sequence completed!')//complete
		)
	}

	displayUser(user: User): void
	{
		this.router.navigate(['/user/', user.id]);
	}
	
	deleteUser(user: User): void
	{
		this.loginService.deleteUser(user.id).subscribe(data => {
			this.loginService.getValidUsers().subscribe(
				(data) => this.users = data,
				(error) => this.errorMsg = error,
				() => console.log('the sequence completed')
			)
		})
		/*
		if(this.errorMsg == "")
			this.loginService.resetIds(user.id);
		*/
	}
}
