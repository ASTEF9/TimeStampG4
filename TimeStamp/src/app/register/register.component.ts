import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, Validators} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

	formdata;
	error: boolean = false;
	errorMsg: string = "";
	valid_users;
	num;

	constructor(public loginService: LoginService, private router: Router) {}

	ngOnInit(): void 
	{
		this.error = false;
		this.errorMsg = "";		
		this.loginService.getValidUsers().subscribe
		(
			(data) => this.valid_users = data,
			(error) => this.errorMsg = error,//error/failure
			() => console.log('the sequence completed!')//complete
		)	
		var num = this.valid_users;
		this.formdata = new FormGroup({
			firstName: new FormControl("", Validators.required),
			lastName: new FormControl("", Validators.required),
			description: new FormControl("", Validators.required),
			email: new FormControl("", [Validators.required]),//, this.validateUsername(num)]),
			password: new FormControl("", Validators.required),
			rePassword: new FormControl("", Validators.required)
		})
	}
	
	register(user): void
	{
		if(user.password != user.rePassword)
		{
			console.log("ERROR PASSWORD NO GOOD");
			this.error = true;
			this.errorMsg = "Your passwords do not macth!";
			this.router.navigate(['/registration']);;
			return;
		}
		for(var x = 0; x < this.valid_users.length; x++)
		{
			if(this.valid_users[x].email == user.email)
			{
				this.error = true;
				this.errorMsg = "A user with this username already exists!";
				this.router.navigate(['/registration']);;
				return;
			}
		}
		
		var u = new User(user.email, user.password, user.firstName, user.lastName, user.description);
		this.loginService.register(u).subscribe((data: {}) =>
		{
			this.router.navigate(['/']);
		})
	}
/*	NOT WORKING
	validateUsername(users: User[])
	{
		console.log(users);
		return (control: AbstractControl): { [key: string]: boolean } | null => 
		{
			console.log(users);
			for(var x = 0; x < users.length; x++)
			{
				if(users[x].email == control.value)
				{
					//this.error = true;
					//this.errorMsg = "A user with this username already exists!";
					return {userValid:false};
					break;	
				}
			}
			return null;
		};
	}
*/
}
