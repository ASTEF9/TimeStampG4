import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

	formdata;

	constructor(public loginService: LoginService, private router: Router) { }

	ngOnInit(): void 
	{
		this.formdata = new FormGroup({
			firstName: new FormControl("", Validators.required),
			lastName: new FormControl("", Validators.required),
			description: new FormControl("", Validators.required),
			username: new FormControl("", Validators.required),
			password: new FormControl("", Validators.required),
			rePassword: new FormControl("", Validators.required)
		});		
	}
	
	register(user): void
	{
		if(user.password != user.rePassword)
		{
			console.log("ERROR PASSWORD NO GOOD");
			this.router.navigate(['/registration']);;
			return;
		}
		var u = new User(user.username, user.password, user.firstName, user.lastName, user.description);
		this.loginService.register(u).subscribe((data: {}) =>
		{
			this.router.navigate(['/']);
		})
	}
}
