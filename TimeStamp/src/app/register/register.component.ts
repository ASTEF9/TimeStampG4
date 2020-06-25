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
			username: new FormControl("", Validators.required),
			password: new FormControl("", Validators.required)
		});		
	}
	
	register(user): void
	{
		var u = new User(user.username, user.password);
		this.loginService.register(u).subscribe((data: {}) =>
		{
			this.router.navigate(['/']);
		})
	}
}
