import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	formdata;
	errorMsg;
	valid_users;
	
	constructor(public loginService: LoginService, private router: Router) { }

	ngOnInit(): void 
	{
		this.formdata = new FormGroup({
			username: new FormControl("", Validators.required),
			password: new FormControl("", Validators.required)
		});	
		this.loginService.getValidUsers().subscribe(
			(data) => this.valid_users = data,
			(error) => this.errorMsg = error,//error/failure
			() => console.log('the sequence completed!')//complete
		)
	}
	
	login(user): void
	{
		for(var x = 0; x < this.valid_users.length; x++)
		{
			if(this.valid_users[x].username == user.username)
			{
				if(this.valid_users[x].password == user.password)
				{
					this.router.navigate(['/']);
					this.loginService.loggedIn = true;
					this.loginService.loggedInUser = user.firstName + user.lastName;
					console.log(this.loginService.loggedInUser);
					return;
				}
				else
					break;	
			}
		}
		
		console.log('ERROR');
		
	}

}
